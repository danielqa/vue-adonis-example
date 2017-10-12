class FlashMessage {

  static instance;

  constructor() {
    if (this.instance) {
      return this.instance;
    }
    this.type = '';
    this.messages = [];
    this.instance = this;
  }

  show(type, text) {
    this.type = type;
    this.messages = Array.isArray(text) ? text : [text];
  }

  destroy() {
    this.messages = [];
  }

  hasPendingMessages() {
    return this.messages.length > 0;
  }
}

export default new FlashMessage();
