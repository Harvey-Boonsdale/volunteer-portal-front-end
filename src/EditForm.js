import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";

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
    year: findOpportunity.year,
    startTime: findOpportunity.startTime,
    finishTime: findOpportunity.finishTime,
    date: findOpportunity.date,
    commitment: findOpportunity.commitment,
    location: findOpportunity.location,
    info: findOpportunity.info,
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
    <div className="inputForm">
      <Row className="col-md-10 col-lg-8">
        <h3>Edit Opportunity</h3>
        <Form onSubmit={(e) => submitHandler(e)} id="editForm">
          <label for="name">Opportunity Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={(opportunity) => handleChange(opportunity)}
          />
          <br />
          <label for="school">School / College:</label>
          <br />
          <select
            name="school"
            value={formValues.school}
            onChange={(opportunity) => handleChange(opportunity)}
          >
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
            <option value="Holgate Meadows School">
              Holgate Meadows School
            </option>
            <option value="King Ecgbert School">King Ecgbert School</option>
            <option value="King Edward VII">King Edward VII</option>
            <option value="Longley Park Sixth Form College">
              Longley Park Sixth Form College
            </option>
            <option value="Meadowhead School">Meadowhead School</option>
            <option value="Mercia School">Mercia School</option>
            <option value="Newfield School">Newfield School</option>
            <option value="Notre Dame High School">
              Notre Dame High School
            </option>
            <option value="Oasis Don Valley">Oasis Don Valley</option>
            <option value="Outwood Academy - City">
              Outwood Academy - City
            </option>
            <option value="Parkwood Academy">Parkwood Academy</option>
            <option value="Seven Hills School">Seven Hills School</option>
            <option value="Sheaf Training">Sheaf Training</option>
            <option value="Sheffield Inclusion Centre">
              Sheffield Inclusion Centre
            </option>
            <option value="Sheffield Park Academy">
              Sheffield Park Academy
            </option>
            <option value="Sheffield Springs Academy">
              Sheffield Springs Academy
            </option>
            <option value="Silverdale">Silverdale</option>
            <option value="Stocksbridge">Stocksbridge</option>
            <option value="Talbot Specialist School">
              Talbot Specialist School
            </option>
            <option value="Tapton">Tapton</option>
            <option value="The Sheffield College">The Sheffield College</option>
            <option value="Westfield School">Westfield School</option>
            <option value="Yewlands Academy">Yewlands Academy</option>
            <option value="other">Other</option>
            onChange={(opportunity) => handleChange(opportunity)}
          </select>
          <br />
          Details:
          <br />
          <textarea
            type="text"
            rows="5"
            cols="40"
            name="details"
            value={formValues.details}
          />
          <br />
          Year Group:
          <br />
          <select
            name="year"
            value={formValues.year}
            onChange={(opportunity) => handleChange(opportunity)}
          >
            <option value="Year 7">Year 7</option>
            <option value="Year 8">Year 8</option>
            <option value="Year 9">Year 9</option>
            <option value="Year 10">Year 10</option>
            <option value="Year 11">Year 11</option>
            <option value="Year 12">Year 12</option>
            <option value="Year 13">Year 13</option>
            <option value="Year 14">Year 14</option>
            <option value="Sixth Form College">Sixth Form College</option>
            <option value="various">Various Year Groups</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="date">
            Date <span>&#40;leave blank if not known / flexible</span>
            <span>&#41;</span>:
          </label>
          <br />
          <input
            type="date"
            name="date"
            value={formValues.date}
            onChange={(opportunity) => handleChange(opportunity)}
          />
          <br />
          <label htmlFor="startTime">
            Start Time <span>&#40;leave blank if not known / flexible</span>
            <span>&#41;</span>:
          </label>
          <br />
          <input
            type="time"
            name="startTime"
            value={formValues.startTime}
            onChange={(opportunity) => handleChange(opportunity)}
          />
          <br />
          <label htmlFor="finishTime">
            Finish Time <span>&#40;leave blank if not known / flexible</span>
            <span>&#41;</span>:
          </label>
          <br />
          <input
            type="time"
            name="finishTime"
            value={formValues.finishTime}
            onChange={(opportunity) => handleChange(opportunity)}
          />
          <br />
          Commitment:
          <br />
          <select
            name="commitment"
            value={formValues.commitment}
            onChange={(opportunity) => handleChange(opportunity)}
          >
            <option value="Ongoing">Ongoing</option>
            <option value="To be agreed">To be agreed</option>
            <option value="1 hour">1 hour</option>
            <option value="1.5 hours">1.5 hours</option>
            <option value="2 hours">2 hours</option>
            <option value="2.5 hours">2.5 hours</option>
            <option value="3 hours">3 hours</option>
            <option value="3.5 hours">3.5 hours</option>
            <option value="4 hours">4 hours</option>
            <option value="5 hours">5 hours</option>
            <option value="6 hours">6 hours</option>
            <option value="7 hours">7 hours</option>
          </select>
          <br />
          Location:
          <br />
          <select
            name="location"
            value={formValues.location}
            onChange={(opportunity) => handleChange(opportunity)}
          >
            <option value="At School / College">At School / College</option>
            <option value="At your workplace">At your workplace</option>
            <option value="Remote">Remote</option>
            <option value="Other">Other</option>
            <option value="To be agreed">To be agreed</option>
          </select>
          <br />
          Type:
          <br />
          <select
            name="type"
            value={formValues.type}
            onChange={(opportunity) => handleChange(opportunity)}
          >
            <option value="Mock Interviews">Mock Interviews</option>
            <option value="Workplace Visit">Workplace Visit</option>
            <option value="Careers Talk">Careers Talk</option>
            <option value="Mentoring">Mentoring</option>
            <option value="Enterprise Skills">Enterprise Skills</option>
            <option value="Virtual Work Experience">
              Virtual Work Experience
            </option>
            <option value="What's my Line">What's my Line</option>
            <option value="Careers in the Curriculum">
              Careers in the Curriculum
            </option>
            <option value="CV / Interview Skills">CV / Interview Skills</option>
            <option value="Employability Skills Workshop">
              Employability Skills Workshop
            </option>
            <option value="Careers Fair">Careers Fair</option>
            <option value="Other">Other</option>
          </select>
          <br />
          Additional Info:
          <br />
          <textarea
            type="text"
            rows="4"
            cols="40"
            name="info"
            value={formValues.info}
            onChange={(opportunity) => handleChange(opportunity)}
          />
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

export default EditForm;
