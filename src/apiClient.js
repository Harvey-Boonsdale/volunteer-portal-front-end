import axios from "axios";
const url =
  process.env.NODE_ENV === "production"
    ? "https://volunteer-portal-api.onrender.com/"
    : "http://localhost:3001/";

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

  addOpportunity(
    name,
    school,
    details,
    year,
    startTime,
    finishTime,
    date,
    commitment,
    location,
    type,
    info,
    createdAt
  ) {
    return this.authenticatedCall("post", url + "opportunities", {
      name,
      school,
      details,
      year,
      startTime,
      finishTime,
      date,
      commitment,
      location,
      type,
      info,
      createdAt,
    });
  }

  editOpportunity(post, id) {
    return this.authenticatedCall("put", url + `opportunities/${id}`, post);
  }

  deleteOpportunity(id) {
    return this.authenticatedCall("delete", url + `opportunities/${id}`);
  }
}
