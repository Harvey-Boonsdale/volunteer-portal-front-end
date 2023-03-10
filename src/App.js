import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";
// import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

// import InputForm from "./InputForm";
// import EditForm from "./EditForm";

// initialise properties of opportunity card

function App() {
  const [opportunities, changeOpportunities] = useState([]);
  const client = new ApiClient();

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
      <Header />
      <LandingPage />
      {/* <Dashboard
        listOpportunities={listOpportunities}
        opportunities={opportunities}
        client={client}
      /> */}
      <Footer />
    </>
  );
}

export default App;
