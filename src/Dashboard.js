import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";
import OpportunityCard from "./OpportunityCard";
import AdminCard from "./AdminCard";
import Header from "./Header";
import SIBILogo from "./SIBILogo";

function Dashboard(props) {
  useEffect(() => {
    props.listOpportunities();
  }, []);

  const makeOpportunities = () => {
    return props.opportunities.map((opportunity) => {
      return !props.token ? (
        <Row className="col-md-10 col-lg-8">
          <Col className="cardCol">
            <OpportunityCard
              postToDisplay={opportunity}
              client={props.client}
              listOpportunities={props.listOpportunities}
            />
          </Col>
        </Row>
      ) : (
        <Row className="col-md-10 col-lg-8">
          <Col className="cardCol">
            <AdminCard
              postToDisplay={opportunity}
              client={props.client}
              listOpportunities={props.listOpportunities}
            />
          </Col>
        </Row>
      );
    });
  };

  //print opportunity card

  return (
    <div>
      <Row>
        <Col className="header">
          <SIBILogo />
        </Col>
      </Row>
      <Row className="cardContainer">
        <Col>
          <Row className="cards">{makeOpportunities()}</Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
