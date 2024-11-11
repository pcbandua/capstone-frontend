import { ApplicationsNew } from "./ApplicationsNew";
import axios from "axios";
import { useState } from "react";

export function ApprenticeshipsShow ({apprenticeship}){
  const [applications, setApplications] = useState ([])


  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/applications.json", params).then((response) => {
      setApplications([...applications, response.data]);
      successCallback();
    });
  }; 

const handleCreateApplication = () => {
const params = {apprentice_id: apprentice.id, apprenticeship_id: apprenticeship.id};
handleCreate (params, () => {
 console.log("Application submission success")
})
}


    return (
      <div>
          <div key={apprenticeship.id}>
            <h2>{apprenticeship.title}</h2>
            {/* <img src={employer.company_logo} alt="logo of the company sponsoring the apprenticeship" /> */}
            {/* <h3>Employer: {employer.company_name}</h3> */}
            <p><b>Summary:</b> {apprenticeship.summary}</p>
            <p><b>Location:</b> {apprenticeship.location_status}</p>
            <p><b>Required Skills:</b> {apprenticeship.skills_required}</p>
            <p><b>Qualifications:</b> {apprenticeship.qualifications}</p>
            <p><b>Best Suited to Holland Codes:</b> {apprenticeship.holland_code_preference}</p>
            <p><b>Hourly Compensation:</b> {apprenticeship.compensation}</p>
            <p><b>Time Committment:</b> {apprenticeship.duration}</p>
            <p><b>Nationally Recognized:</b> {apprenticeship.national_registered_status}</p>
            <button onClick={handleCreateApplication}>Apply For This Apprenticeship</button>
            </div>
          
      </div>
     
    );
  }