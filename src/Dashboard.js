import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";
import OpportunityCard from "./OpportunityCard";
import AdminCard from "./AdminCard";

function Dashboard(props) {
  useEffect(() => {
    props.listOpportunities();
  }, []);

  const makeOpportunities = () => {
    return props.opportunities.map((opportunity) => {
      return !props.token ? (
        <Col className="cardCol">
          <OpportunityCard
            postToDisplay={opportunity}
            client={props.client}
            listOpportunities={props.listOpportunities}
          />
        </Col>
      ) : (
        <Col className="cardCol">
          <AdminCard
            postToDisplay={opportunity}
            client={props.client}
            listOpportunities={props.listOpportunities}
          />
        </Col>
      );
    });
  };

  //print opportunity card

  return (
    <div className="cardContainer">
      <Row className="cards">{makeOpportunities()}</Row>
    </div>
  );
}

export default Dashboard;
