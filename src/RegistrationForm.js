import React, { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";

function RegistrationForm(props) {
  const form = useRef();

  const { id } = useParams();

  const findOpportunity = props.opportunities.find((opportunity) => {
    return opportunity._id === id;
  });

  const [formValues] = useState({
    name: findOpportunity.name,
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="landingPage">
      <p>Please Provide Your Details to Register</p>
      <p>Opportunity Name: {formValues.name}</p>

      <Form ref={form} onSubmit={(e) => submitHandler(e)}>
        Full Name:
        <input type="text" name="volName" required />
        <br />
        Employer / Business:
        <input type="text" name="employer" required />
        <br />
        Job Title:
        <input type="text" name="job" required />
        <br />
        Email Address:
        <input type="email" name="email" required />
        <br />
        Contact Number:
        <input type="text" name="contactNumber" required />
        <br />
        Opportunity:
        <input type="text" name="name" value={formValues.name} />
        <br />
        <Button type="submit" disabled={false}>
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </div>
  );
}

export default RegistrationForm;
