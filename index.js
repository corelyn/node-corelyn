const axios = require("axios");

class CorelynSDK {
  constructor(apiKey, defaultModel = "cerebras/llama3.1-8b", systemPrompt = "Your name is Corelyn") {
    this.apiKey = apiKey;
    this.defaultModel = defaultModel;
    this.systemPrompt = systemPrompt;
    this.BASE_URL = "https://corelyncloud-backend.onrender.com/chat/completions";
  }

  setModel(model) {
    this.defaultModel = model;
  }

  getAIResponse(userPrompt = null, systemPrompt = null, messages = null, model = null) {
    if (!messages) {
      messages = [
        { role: "system", content: systemPrompt || this.systemPrompt },
        { role: "user", content: userPrompt }
      ];
    }

    const payload = {
      apiKey: this.apiKey,
      model: model || this.defaultModel,
      messages: messages
    };

    return axios.post(this.BASE_URL, payload)
      .then(response => {
        const data = response.data;
        return (data.choices?.[0]?.message?.content) || data.text || data;
      })
      .catch(err => {
        console.error("Error fetching AI response:", err.message);
        return null;
      });
  }

  async getAIResponseAsync(userPrompt = null, systemPrompt = null, messages = null, model = null) {
    if (!messages) {
      messages = [
        { role: "system", content: systemPrompt || this.systemPrompt },
        { role: "user", content: userPrompt }
      ];
    }

    const payload = {
      apiKey: this.apiKey,
      model: model || this.defaultModel,
      messages: messages
    };

    try {
      const response = await axios.post(this.BASE_URL, payload);
      const data = response.data;
      return (data.choices?.[0]?.message?.content) || data.text || data;
    } catch (err) {
      console.error("Error fetching AI response:", err.message);
      return null;
    }
  }
}

module.exports = CorelynSDK;
