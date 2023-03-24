import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function InputForm(props) {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
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
      <h4>Add Opportunity</h4>
      <Form onSubmit={(e) => submitHandler(e)} id="addForm">
        Opportunity Name:
        <br />
        <input type="text" name="name" />
        <br />
        School / College:
        <br />
        <input type="text" name="school" />
        <br />
        Details:
        <br />
        <input type="text" name="details" />
        <br />
        Time:
        <br />
        <input type="text" name="time" />
        <br />
        Date:
        <br />
        <input type="text" name="date" />
        <br />
        Commitment:
        <br />
        <input type="text" name="commitment" />
        <br />
        Location:
        <br />
        <input type="text" name="location" />
        <br />
        Type:
        <br />
        <input type="text" name="type" />
        <br />
        <Button type="submit" disabled={false}>
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </div>
  );
}

export default InputForm;
