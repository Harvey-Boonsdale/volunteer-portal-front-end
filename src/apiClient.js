import axios from "axios";
// const url = "http://localhost:3001/";
const url = "https://volunteer-portal-api.onrender.com/";

export class ApiClient {
  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    });
  }
  listOpportunities() {
    return this.authenticatedCall("get", url + "opportunities");
  }

  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  async login(username, password) {
    return await axios({
      method: "post",
      url: `${url}auth`,
      data: { username, password },
    });
  }

  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }
}
