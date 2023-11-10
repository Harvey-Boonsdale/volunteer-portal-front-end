import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";
import Login from "./Login";
import LandingPage from "./LandingPage";
import InputForm from "./InputForm";
import EditForm from "./EditForm";
import AdminDashboard from "./AdminDashboard";
import RegistrationForm from "./RegistrationForm";
import ThankYou from "./ThankYou";
import AccessibilityStatement from "./AccessibilityStatement";

// initialise properties of opportunity card

function App() {
  const [token, changeToken] = useState(window.localStorage.getItem("token"));
  const [opportunities, changeOpportunities] = useState([]);
  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    changeToken(undefined);
  };
  const loginHandler = (token) => {
    window.localStorage.setItem("token", token);
    changeToken(token);
  };
  const client = new ApiClient(
    () => {
      return token;
    },
    () => logoutHandler()
  );

  // error message

  const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      return false;
    }
  };

  // Gets info from server and puts it in state

  const listOpportunities = () => {
    client.listOpportunities().then((response) => {
      let success = checkStatus(response);
      if (!success) {
        alert("Error connecting - please try again");
        return;
      }

      changeOpportunities(response.data);
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/view"
          element={
            <Dashboard
              listOpportunities={listOpportunities}
              opportunities={opportunities}
              client={client}
              token={token}
            />
          }
        />

        <Route
          path="/login/input"
          element={
            <InputForm client={client} listOpportunities={listOpportunities} />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditForm
              opportunities={opportunities}
              client={client}
              listOpportunities={listOpportunities}
            />
          }
        />
        <Route
          path="/login"
          element={
            token ? (
              <AdminDashboard logoutHandler={logoutHandler} />
            ) : (
              <Login
                loginHandler={(token) => {
                  loginHandler(token);
                }}
                client={client}
              />
            )
          }
        />
        <Route
          path="/registration/:id"
          element={<RegistrationForm opportunities={opportunities} />}
        />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
      </Routes>
    </>
  );
}

export default App;
