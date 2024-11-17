import "./Modal.css";

export function Modal({ children, show, onClose }) {
if (show) {
return (

  <>
  <div className="modal-background" onclick="closeModal(event)">

      <div className="ease-out duration-300 fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <section className=" bg-white rounded-lg shadow-lg max-w-lg w- p-16 space-y-4">
              {children}
              <button className="close justify-start top-0 right-0" type="button" onClick={onClose}>
                &#x2715;
              </button>
              
            </section>
          </div>
  </div>
  </>
);
}
}

// {/* <div>

// {/* Modal Content */}
//   <div key={apprenticeship.id}>
//     <div className="font-semibold text-2xl border-b pb-3 "><h2>{apprenticeship.title}</h2></div>
//     {/* <img src={employer.company_logo} alt="logo of the company sponsoring the apprenticeship" /> */}
//     {/* <h3>Employer: {employer.company_name}</h3> */}
    
//     <div className="space-y-2"><p><b>Summary:</b> {apprenticeship.summary}</p>
//       <p><b>Location:</b> {apprenticeship.location_status}</p>
//       <p><b>Required Skills:</b> {apprenticeship.skills_required}</p>
//       <p><b>Qualifications:</b> {apprenticeship.qualifications}</p>
//       <p><b>Best for Holland Codes:</b> {apprenticeship.holland_code_preference}</p>
//       <p><b>Hourly Compensation:</b> {apprenticeship.compensation}</p>
//       <p><b>Time Committment:</b> {apprenticeship.duration}</p>
//       <p><b>Nationally Recognized:</b> {apprenticeship.national_registered_status}</p></div>
//     <div className="flex justify-left pt-4 border-t mt-4">
//     <Button className="bg-lime-400 py-2 px-4 rounded-lg hover:bg-slate-200 transition  text-slate-900" onClick={handleCreateApplication}>Submit Your Application</Button>
//     </div>
    
//   </div>
// </div> */}