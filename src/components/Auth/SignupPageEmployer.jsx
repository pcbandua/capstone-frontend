import axios from "axios";
import { useState } from "react";

export function SignupPageEmployer() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/employers.json", params)
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
      <div className="text-3xl">Signup As An Employer</div>
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
          Password confirmation:{" "}
          <input name="password_confirmation" type="password" />
        </div>
        <div>
          Company Name: <input name="company_name" type="text" />
        </div>
        <div>
          <label htmlFor="company_logo">Upload Company Logo:</label>
          <br />
          <input
            type="file"
            id="company_logo"
            name="company_logo"
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="company_description">
            Tell us about your company:
          </label>
          <br />
          <textarea
            id="company_description"
            name="company_description"
            rows="4"
            cols="50"
            maxLength="300"
            placeholder="Describe your company (300 characters max)"
          ></textarea>
        </div>
        <div>
          Industry: <input name="industry" type="text" />
        </div>
        <div>
          Website: <input name="website" type="text" />
        </div>
        <button type="submit">Signup As An Employer</button>
      </form>
    </div>
  );
}
