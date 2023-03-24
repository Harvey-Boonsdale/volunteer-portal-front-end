import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function InputForm(props) {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    console.log("Event Added!");
    e.preventDefault();

    props.client.addOpportunity(
      e.target.name.value,
      e.target.school.value,
      e.target.details.value,
      e.target.time.value,
      e.target.date.value,
      e.target.commitment.value,
      e.target.location.value,
      e.target.type.value
    );
    props.listOpportunities();
    navigate("/");
  };
  return (
    <div className="landingPage">
      <Form onSubmit={(e) => submitHandler(e)} id="addForm">
        Opportunity Name:
        <input type="text" name="name" />
        <br />
        School / College:
        <input type="text" name="school" />
        <br />
        Details:
        <textarea type="text" rows="4" cols="50" name="details" />
        <br />
        Time:
        <input type="text" name="time" />
        <br />
        Date:
        <input type="text" name="date" />
        <br />
        Commitment:
        <input type="text" name="commitment" />
        <br />
        Location:
        <input type="text" name="location" />
        <br />
        Type:
        <input type="text" name="type" />
        <br />
        <Button type="submit" disabled={false}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default InputForm;
