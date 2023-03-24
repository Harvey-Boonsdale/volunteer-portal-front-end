import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
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
      console.log(opportunity, props.token);
      return !props.token ? (
        <div className="cards">
          <OpportunityCard
            postToDisplay={opportunity}
            client={props.client}
            listEvents={props.listOpportunities}
          />
        </div>
      ) : (
        <div>
          <AdminCard
            postToDisplay={opportunity}
            client={props.client}
            listEvents={props.listOpportunities}
          />
        </div>
      );
    });
  };

  //print opportunity card

  return (
    <div>
      <Container>
        <Row className="cards">{makeOpportunities()}</Row>
      </Container>
    </div>
  );
}

export default Dashboard;
