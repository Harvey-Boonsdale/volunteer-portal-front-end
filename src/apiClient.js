import axios from "axios";
// const url = "http://localhost:3001/";
const url = "https://volunteer-portal-api.onrender.com";

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
}
