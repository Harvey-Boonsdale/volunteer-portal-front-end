import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import InputForm from "./InputForm";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import AdminDashboard from "./AdminDashboard";

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

  console.log(token);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/view"
          element={
            <Dashboard
              listOpportunities={listOpportunities}
              opportunities={opportunities}
              client={client}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login/input" element={<InputForm />} />
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
