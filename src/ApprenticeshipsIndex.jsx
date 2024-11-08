export function ApprenticeshipsIndex({apprenticeships}) {
  return (
    <div>
      <h1>Apprenticeship Opportunities</h1>
      {apprenticeships.map((apprenticeship) => (
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
          </div>
      ))}
    </div>
  );
}