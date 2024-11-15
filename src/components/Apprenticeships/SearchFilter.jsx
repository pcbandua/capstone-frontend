import { useState, useEffect } from "react";
import axios from "axios";

export function FilterDropdowns() {
  const [hollandCodePreferences, setHollandCodePreferences] = useState([]);
  const [compensation, setCompensation] = useState([]);
  const [selectedHollandCodePreference, setSelectedHollandCodePreference] = useState("");
  const [selectedCompensation, setSelectedCompensation] = useState("");

  useEffect(() => {
    // Fetch filter data from Rails
    axios.get("http://localhost:3000/apprenticeships/filters")
      .then(response => {
        setHollandCodePreferences(response.data.holland_code_preference);
        setCompensation(response.data.compensation);
      })
      .catch(error => console.error('Error fetching filter data:', error));
  }, []);

  function handleSearch() {
    axios.get('/apprenticeships', {
      params: {
        holland_code_preference: selectedHollandCodePreference,
        compensation: selectedCompensation,
      }
    })
    .then(response => {
      // Handle response with filtered apprenticeship data
      console.log(response.data);
    })
    .catch(error => console.error('Error fetching apprenticeships:', error));
  }

  return (
    <div>
      <h1>Tech Jobs for Good.</h1>

      <div className="dropdowns">
        {/* Job Holland Code Dropdown */}
        <div>
          <label>Job Holland Code</label>
          <select
            value={selectedHollandCodePreference}
            onChange={(e) => setSelectedHollandCodePreference(e.target.value)}
          >
            <option value="">Holland Code</option>
            {hollandCodePreferences.map((hollandCodePreference) => (
              <option key={hollandCodePreference} value={hollandCodePreference}>
                {hollandCodePreference}
              </option>
            ))}
          </select>
        </div>

        {/* Compensation Dropdown */}
        <div>
          <label>Compensation</label>
          <select
            value={selectedCompensation}
            onChange={(e) => setSelectedCompensation(e.target.value)}
          >
            <option value="">Hourly Wage</option>
            {compensation.map((comp) => (
              <option key={comp} value={comp}>
                {comp}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Add a search button to trigger the filter */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default FilterDropdowns;