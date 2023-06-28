import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function InputForm(props) {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    props.client.addOpportunity(
      e.target.name.value,
      e.target.school.value,
      e.target.details.value,
      e.target.year.value,
      e.target.startTime.value,
      e.target.finishTime.value,
      e.target.date.value,
      e.target.commitment.value,
      e.target.location.value,
      e.target.type.value,
      e.target.info.value
    );
    props.listOpportunities();
    // navigate("/");
  };
  return (
    <div className="inputForm">
      <Form onSubmit={(e) => submitHandler(e)} id="addForm">
        <label htmlFor="name">Opportunity Name:</label>
        <input type="text" name="name" />
        <br />
        <label htmlFor="school">School / College:</label>
        <select name="school">
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
        </select>
        <br />
        <label htmlFor="details">Details:</label>
        <textarea type="text" rows="4" cols="50" name="details" />
        <br />
        <label htmlFor="year">Year Group:</label>
        <select name="year">
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
        </select>
        <br />
        <label htmlFor="startTime">Start Time:</label>
        <input type="time" name="startTime" />
        <br />
        <label htmlFor="finishTime">Finish Time:</label>
        <input type="time" name="finishTime" />
        <br />
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" />
        <br />
        <label htmlFor="commitment">Time Commitment:</label>
        <select name="commitment">
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
        <label htmlFor="location">Location:</label>
        <select name="location">
          <option value="At School / College">At School / College</option>
          <option value="At your workplace">At your workplace</option>
          <option value="Remote">Remote</option>
          <option value="Other">Other</option>
          <option value="To be agreed">To be agreed</option>
        </select>
        <br />
        <label htmlFor="type">Type:</label>
        <select name="type">
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
          <option value="Other">Other</option>
        </select>
        <br />
        <label htmlFor="info">Additional Info:</label>
        <textarea type="text" rows="4" cols="50" name="info" />
        <br />

        <Button
          type="submit"
          disabled={false}
          className="link btn btn-primary sibiButton"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default InputForm;
