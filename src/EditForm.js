import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Form populated with opportunity to edit

function EditForm(props) {
  const navigate = useNavigate();
  // props.opportunities has list of all events
  // using useParams find ID of post from URL
  const { id } = useParams();

  // Find the one event in props.opportunities that matches ID

  const findOpportunity = props.opportunities.find((opportunity) => {
    return opportunity._id === id;
  });

  // Store in variable and take data to populate the form

  const [formValues, changeFormValues] = useState({
    name: findOpportunity.name,
    school: findOpportunity.school,
    details: findOpportunity.details,
    time: findOpportunity.time,
    date: findOpportunity.date,
    commitment: findOpportunity.commitment,
    location: findOpportunity.location,
    type: findOpportunity.type,
  });

  const handleChange = (opportunity) => {
    const newState = { ...formValues };
    newState[opportunity.target.name] = opportunity.target.value;
    changeFormValues(newState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    props.client.editOpportunity(formValues, id);
    props.listOpportunities();
    navigate("/");
  };

  return (
    <div className="landingPage">
      <p>Edit Opportunity</p>
      <Form onSubmit={(e) => submitHandler(e)} id="editForm">
        Opportunity Name:
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        <br />
        School:
        <input
          type="text"
          name="school"
          value={formValues.school}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        <br />
        Details:
        <textarea
          type="text"
          rows="4"
          cols="50"
          name="details"
          value={formValues.details}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        <br />
        Time:
        <input
          type="text"
          name="time"
          value={formValues.time}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        <br />
        Date:
        <input
          type="text"
          name="date"
          value={formValues.date}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        <br />
        Commitment:
        <input
          type="text"
          name="commitment"
          value={formValues.commitment}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        <br />
        Location:
        <input
          type="text"
          name="location"
          value={formValues.location}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        <br />
        Type:
        <input
          type="text"
          name="type"
          value={formValues.type}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        <br />
        <Button type="submit" disabled={false}>
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </div>
  );
}

export default EditForm;
