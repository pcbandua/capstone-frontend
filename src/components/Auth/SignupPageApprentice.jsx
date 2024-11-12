import axios from "axios";
import { useState } from "react";

export function SignupPageApprentice() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/apprentices.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="py-6" id="signup">
    <div className="text-3xl" >Signup As An Apprentice</div>
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
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
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

      <button type="submit">Signup As An Apprentice</button>
    </form>
  </div>
  );
}