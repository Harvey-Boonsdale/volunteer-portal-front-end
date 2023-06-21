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
    details: findOpportunity.year,
    startTime: findOpportunity.startTime,
    finishTime: findOpportunity.finishTime,
    date: findOpportunity.date,
    commitment: findOpportunity.commitment,
    location: findOpportunity.location,
    type: findOpportunity.type,
    info: findOpportunity.info,
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
        <label for="name">Opportunity Name:</label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        <br />
        <label for="school">School / College:</label>
        <select name="school">
          value={formValues.school}
          <option value="All Saints Catholic High School">
            All Saints Catholic High School
          </option>
          <option value="Astrea Academy">Astrea Academy</option>
          <option value="Becton - Kenwood Centre">
            Becton - Kenwood Centre
          </option>
          <option value="Becton">Becton</option>
          <option value="Bents Green School">Bents Green School</option>
          <option value="Birley Academy">Birley Academy</option>
          <option value="Bradfield School">Bradfield School</option>
          <option value="Chapeltown Academy">Chapeltown Academy</option>
          <option value="Chaucer School">Chaucer School</option>
          <option value="Discovery Academy">Discovery Academy</option>
          <option value="Ecclesfield School">Ecclesfield School</option>
          <option value="Firth Park Academy">Firth Park Academy</option>
          <option value="Forge Valley School">Forge Valley School</option>
          <option value="Handsworth Grange Community Sports College">
            Handsworth Grange Community Sports College
          </option>
          <option value="Heritage Park Community School">
            Heritage Park Community School
          </option>
          <option value="High Storrs">High Storrs</option>
          <option value="Hinde House">Hinde House</option>
          <option value="Holgate Meadows School">Holgate Meadows School</option>
          <option value="King Ecgbert School">King Ecgbert School</option>
          <option value="King Edward VII">King Edward VII</option>
          <option value="Longley Park Sixth Form College">
            Longley Park Sixth Form College
          </option>
          <option value="Meadowhead School">Meadowhead School</option>
          <option value="Mercia School">Mercia School</option>
          <option value="Notre Dame High School">Notre Dame High School</option>
          <option value="Oasis Don Valley">Oasis Don Valley</option>
          <option value="Outwood Academy - City">Outwood Academy - City</option>
          <option value="Parkwood Academy">Parkwood Academy</option>
          <option value="Seven Hills School">Seven Hills School</option>
          <option value="Sheaf Training">Sheaf Training</option>
          <option value="Sheffield Inclusion Centre">
            Sheffield Inclusion Centre
          </option>
          <option value="Sheffield Park Academy">Sheffield Park Academy</option>
          <option value="Sheffield Springs Academy">
            Sheffield Springs Academy
          </option>
          <option value="Silverdale">Silverdale</option>
          <option value="Stocksbridge">Stocksbridge</option>
          <option value="Talbot Specialist School">
            Talbot Specialist School
          </option>
          <option value="The Sheffield College">The Sheffield College</option>
          <option value="Westfield School">Westfield School</option>
          <option value="Yewlands Academy">Yewlands Academy</option>
          <option value="other">Other</option>
          onChange={(opportunity) => handleChange(opportunity)}
        </select>
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
        Year Group:
        <select name="year">
          value={formValues.year}
          <option value="Y7">Year 7</option>
          <option value="Y8">Year 8</option>
          <option value="Y9">Year 9</option>
          <option value="Y10">Year 10</option>
          <option value="Y11">Year 11</option>
          <option value="Y12">Year 12</option>
          <option value="Y13">Year 13</option>
          <option value="Y13">Year 14</option>
          <option value="Sixth Form College">Sixth Form College</option>
          <option value="various">Various Year Groups</option>
          <option value="other">Other</option>
          onChange={(opportunity) => handleChange(opportunity)}
        </select>
        <br />
        Start Time:
        <input
          type="time"
          name="startTime"
          value={formValues.startTime}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        Finish Time:
        <input
          type="time"
          name="finishTime"
          value={formValues.finishTime}
          onChange={(opportunity) => handleChange(opportunity)}
        />
        <br />
        Date:
        <input
          type="date"
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
        Additional Info:
        <input
          type="text"
          name="info"
          value={formValues.info}
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
