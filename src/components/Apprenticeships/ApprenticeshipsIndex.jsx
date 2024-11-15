import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ApprenticeshipsIndex({ apprenticeships, onShow }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [hollandCodePreferences, setHollandCodePreferences] = useState([]);
  const [compensation, setCompensation] = useState([]);
  const [selectedHollandCodePreference, setSelectedHollandCodePreference] = useState("");
  const [selectedCompensation, setSelectedCompensation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Adjust as needed

  useEffect(() => {
    axios.get("http://localhost:3000/apprenticeships/filters")
      .then(response => {
        setHollandCodePreferences(response.data.holland_code_preference);
        setCompensation(response.data.compensation);
      })
      .catch(error => console.error('Error fetching filter data:', error));
  }, []);

  const filteredApprenticeships = apprenticeships.filter((apprenticeship) => {
    const matchesSearchTerm = apprenticeship.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHollandCode = selectedHollandCodePreference
      ? apprenticeship.holland_code_preference === selectedHollandCodePreference
      : true;
    const matchesCompensation = selectedCompensation
      ? apprenticeship.compensation === selectedCompensation
      : true;
    
    return matchesSearchTerm && matchesHollandCode && matchesCompensation;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentApprenticeships = filteredApprenticeships.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="py-6 max-md:col-span-2" id="signup">
        <div>
          <h1>Earn and Learn</h1>

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
        </div>

        {/* Search Box */}
        <div className="py-6 bg-cyan-500 rounded-md container mx-auto flex items-center justify-center">
          <div className="text-3xl mb-4 font-semibold">Browse Apprenticeships</div>  
          <div>
            <p>
              Search: <input
                className="rounded-md lg:w-96"
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </p>
          </div>
        </div>

        {/* Filtered Cards */}
        <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentApprenticeships.map((apprenticeship) => (
            <Card key={apprenticeship.id} className="w-96 mb-4 flex flex-col h-full">
              <div>
                <CardHeader>
                  <div className="text-xl">
                    <CardTitle>{apprenticeship.title}</CardTitle>
                  </div>
                  <CardDescription>
                    Location: {apprenticeship.location_status}
                  </CardDescription>
                </CardHeader>
              </div>
              <CardContent className="flex-grow">
                <p><b>Best for Holland Codes:</b> {apprenticeship.holland_code_preference}</p>
                <p><b>Hourly Pay Rate:</b> {apprenticeship.compensation}</p>
                <p><b>Time Commitment:</b> {apprenticeship.duration}</p>
              </CardContent>
              <CardFooter>
                <div className="mt-auto">
                  <Button
                    className="bg-lime-400 w-full"
                    onClick={() => onShow(apprenticeship)}
                    variant="outline"
                  >
                    View Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        
        <div className="pagination-controls container mx-auto">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span>Page {currentPage}</span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastItem >= filteredApprenticeships.length}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export function ApprenticeshipsIndex({ apprenticeships, onShow }) {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [hollandCodePreferences, setHollandCodePreferences] = useState([]);
//   const [compensation, setCompensation] = useState([]);
//   const [selectedHollandCodePreference, setSelectedHollandCodePreference] = useState("");
//   const [selectedCompensation, setSelectedCompensation] = useState("");

//   useEffect(() => {
//     // Fetch filter data from Rails
//     axios.get("http://localhost:3000/apprenticeships/filters")
//       .then(response => {
//         setHollandCodePreferences(response.data.holland_code_preference);
//         setCompensation(response.data.compensation);
//       })
//       .catch(error => console.error('Error fetching filter data:', error));
//   }, []);

//   function handleSearch() {
//     axios.get('/apprenticeships', {
//       params: {
//         holland_code_preference: selectedHollandCodePreference,
//         compensation: selectedCompensation,
//       }
//     })
//     .then(response => {
//       // Handle response with filtered apprenticeship data
//       console.log(response.data);
//     })
//     .catch(error => console.error('Error fetching apprenticeships:', error));
//   }


//   return (
//     <>
//       <div className="py-6 max-md:col-span-2" id="signup">
        
//       <div>
//       <h1>Tech Jobs for Good.</h1>

//       <div className="dropdowns">
//         {/* Job Holland Code Dropdown */}
//         <div>
//           <label>Job Holland Code</label>
//           <select
//             value={selectedHollandCodePreference}
//             onChange={(e) => setSelectedHollandCodePreference(e.target.value)}
//           >
//             <option value="">Holland Code</option>
//             {hollandCodePreferences.map((hollandCodePreference) => (
//               <option key={hollandCodePreference} value={hollandCodePreference}>
//                 {hollandCodePreference}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Compensation Dropdown */}
//         <div>
//           <label>Compensation</label>
//           <select
//             value={selectedCompensation}
//             onChange={(e) => setSelectedCompensation(e.target.value)}
//           >
//             <option value="">Hourly Wage</option>
//             {compensation.map((comp) => (
//               <option key={comp} value={comp}>
//                 {comp}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <button onClick={handleSearch}>Search</button>
//     </div>
//         {/* Search Box */}
//         <div className="py-6 bg-cyan-500 rounded-md container mx-auto flex items-center justify-center">
//         <div className="text-3xl mb-4 font-semibold">Browse Apprenticeships</div>  
//           <div>
//           <p>
//             Search: <input className="rounded-md lg:w-96
//             " type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
//           </p>
      
//           </div>
//         </div>

//         {/* Cards */}
//         <div className=" py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
//           {apprenticeships
//             .filter((apprenticeship) => apprenticeship.title.toLowerCase().includes(searchTerm.toLowerCase()))
//             .map((apprenticeship) => (
//               <Card key={apprenticeship.id} className="w-96 mb-4 flex flex-col h-full">
//                 <div>
//                   <CardHeader>
//                     <div className="text-xl">
//                       <CardTitle>{apprenticeship.title}</CardTitle>
//                     </div>
//                     <CardDescription>
//                       Location: {apprenticeship.location_status}
//                     </CardDescription>
//                   </CardHeader>
//                 </div>
//                 <CardContent className="flex-grow">
//                   <p><b>Best for Holland Codes:</b> {apprenticeship.holland_code_preference}</p>
//                   <p><b>Hourly Pay Rate:</b> {apprenticeship.compensation}</p>
//                   <p><b>Time Commitment:</b> {apprenticeship.duration}</p>
//                 </CardContent>
//                 <CardFooter>
//                   <div className="mt-auto">
//                   <Button className="bg-lime-400 w-full"  onClick={() => onShow(apprenticeship)} variant="outline">
//                     View Details
//                   </Button>
//                   </div>
                  
//                 </CardFooter>
//               </Card>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// }




