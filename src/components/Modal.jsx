import "./Modal.css";

export function Modal({ children, show, onClose }) {
if (show) {
return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <section className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 space-y-4">
    {children}
    <button className="close justify-start" type="button" onClick={onClose}>
      &#x2715;
    </button>
  </section>
</div>
);
}
}

// {/* <div c>
// <div >

//   {/* Modal Content */}
//     <div key={apprenticeship.id}>
//       <div className="font-semibold text-2xl border-b pb-3"><h2>{apprenticeship.title}</h2></div>
//       {/* <img src={employer.company_logo} alt="logo of the company sponsoring the apprenticeship" /> */}
//       {/* <h3>Employer: {employer.company_name}</h3> */}
//       <div className="space-y-2"><p><b>Summary:</b> {apprenticeship.summary}</p>
//       <p><b>Location:</b> {apprenticeship.location_status}</p>
//       <p><b>Required Skills:</b> {apprenticeship.skills_required}</p>
//       <p><b>Qualifications:</b> {apprenticeship.qualifications}</p>
//       <p><b>Best for Holland Codes:</b> {apprenticeship.holland_code_preference}</p>
//       <p><b>Hourly Compensation:</b> {apprenticeship.compensation}</p>
//       <p><b>Time Committment:</b> {apprenticeship.duration}</p>
//       <p><b>Nationally Recognized:</b> {apprenticeship.national_registered_status}</p></div>
//       <div className="flex justify-center pt-4 border-t mt-4">
//       <Button className="bg-lime-500 py-2 px-4 rounded-lg hover:bg-slate-200 transition  text-slate-900" onClick={handleCreateApplication}>Apply For This Apprenticeship</Button>
//       </div>
      
//     </div>
//   </div> */}

// import "./Modal.css";

// export function Modal({ children, show, onClose }) {
// if (show) {
// return (
// <div className="modal-background">
//   <section className="modal-main">
//     {children}
//     <button className="close" type="button" onClick={onClose}>
//       &#x2715;
//     </button>
//   </section>
// </div>
// );
// }
// }