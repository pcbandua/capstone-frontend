import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const [userType, setUserType] = useState("apprentice"); // "apprentice" or "employer"

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setErrors([]); // Reset errors when switching form types
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);

    const url =
      userType === "apprentice"
        ? "http://localhost:3000/apprentices.json"
        : "http://localhost:3000/employers.json";

    axios
      .post(url, params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Adjust as needed for redirect or feedback
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="py-6" id="signup">
      <h1>Signup</h1>

      <div>
        <label>
          <input
            type="radio"
            value="apprentice"
            checked={userType === "apprentice"}
            onChange={handleUserTypeChange}
          />
          Apprentice
        </label>
        <label>
          <input
            type="radio"
            value="employer"
            checked={userType === "employer"}
            onChange={handleUserTypeChange}
          />
          Employer
        </label>
      </div>

      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" required />
        </div>
        <div>
          Password: <input name="password" type="password" required />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" required />
        </div>

        {/* Additional fields for apprentices */}
        {userType === "apprentice" && (
          <div>
            <div>
            Address: <input name="address" type="text" />
            </div>

            <div>
              <p>What's Your Highest Level of Education</p>
              
              <input type="radio" id="Highschool_GED" name="education" value="Highschool G.E.D." />
              <label htmlFor="Highschool_GED">Highschool G.E.D.</label><br />
              
              <input type="radio" id="Associates_Degree" name="education" value="Associates Degree" />
              <label htmlFor="Associates_Degree">Associates Degree</label><br />
              
              <input type="radio" id="Undergraduate_Degree" name="education" value="Undergraduate Degree" />
              <label htmlFor="Undergraduate_Degree">Undergraduate Degree</label><br />
              
              <input type="radio" id="Graduate_Degree_or_Higher" name="education" value="Graduate Degree or Higher" />
              <label htmlFor="Graduate_Degree_or_Higher">Graduate Degree or Higher</label><br />
          </div>
            
          </div>
          
        )}

        {/* Additional fields for employers */}
        {userType === "employer" && (
          <>
          <div>
            
          </div>
        </>
        )}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}