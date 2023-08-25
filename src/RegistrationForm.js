import React, { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";

function RegistrationForm(props) {
  const form = useRef();

  const { id } = useParams();

  const findOpportunity = props.opportunities.find((opportunity) => {
    return opportunity._id === id;
  });
  const navigate = useNavigate();

  const [formValues] = useState({
    name: findOpportunity.name,
    school: findOpportunity.school,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sx63jn4",
        "template_xm9el6h",
        form.current,
        "0sI0CRRfPka9NzgCJ"
      )
      .then(
        (result) => {
          alert(
            "Thank you for registering - the See it Be it Team will be in touch shortly"
          );
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="inputForm">
      <Row className="col-md-10 col-lg-8">
        <h3>Please Provide Your Details to Register</h3>
        <h6>
          Opportunity Name: {formValues.name} at {formValues.school}{" "}
        </h6>

        <Form ref={form} onSubmit={(e) => submitHandler(e)}>
          Full Name:
          <br />
          <textarea type="text" rows="1" cols="40" name="volName" required />
          <br />
          Employer / Business:
          <br />
          <textarea type="text" rows="1" cols="40" name="employer" required />
          <br />
          Job Title:
          <br />
          <textarea type="text" rows="1" cols="40" name="job" required />
          <br />
          Email Address:
          <br />
          <textarea type="email" rows="1" cols="40" name="email" required />
          <br />
          Contact Number:
          <br />
          <textarea
            type="text"
            rows="1"
            cols="40"
            name="contactNumber"
            required
          />
          <br />
          Opportunity:
          <br />
          <input type="text" name="name" value={formValues.name} />
          <br />
          School / College:
          <br />
          <input type="text" name="school" value={formValues.school} />
          <br />
          <br />
          <Button
            type="submit"
            disabled={false}
            className="link btn btn-primary sibiButton"
          >
            {" "}
            Submit{" "}
          </Button>
        </Form>
      </Row>
    </div>
  );
}

export default RegistrationForm;
