class HttpRequest {

  static instance;

  constructor() {
    if (this.instance) {
      return this.instance;
    }
    this.requests = 0;
    this.instance = this;
  }

  pushRequest() {
    this.requests += 1;
  }

  popRequest() {
    setTimeout(() => {
      this.requests -= 1;
    }, 300);
  }

  hasPendingRequests() {
    return this.requests > 0;
  }
}

export default new HttpRequest();
