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
import { Pagination } from "./pagination";

export function ApprenticeshipsIndex({ apprenticeships, onShow }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [hollandCodePreferences, setHollandCodePreferences] = useState([]);
  const [compensation, setCompensation] = useState([]);
  const [selectedHollandCodePreference, setSelectedHollandCodePreference] = useState("");
  const [selectedCompensation, setSelectedCompensation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Adjust as needed

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
    <div className="h-1/2">
      <div className="py-6 max-md:col-span-2 mx-auto" id="signup">

      <div className="text-4xl mb-4 font-semibold">Search Apprenticeships</div> 
       {/* Dropdowns + Searchbar */}
      <div className="  bg-cyan-500 rounded-xl border bg-card text-card-foreground shadow px-6 py-6">
      
       <div className="flex flex-row gap-2 ">

        {/* dropdowns */}
        <div> 
          <div className="dropdowns flex gap-4">
            {/* Job Holland Code Dropdown */}
            <div className="flex-1">
              <label htmlFor="Holland Code" className="block text-sm font-semibold text-gray-900">By Holland Code</label>
              <select className="mt-1 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm"
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
            <div className="flex-1">
              <label htmlFor="Holland Code" className="block text-sm font-semibold text-gray-900">By Hourly Compensation</label>
              <select className="mt-1 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm" 
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
        <div className="flex-1">
          
          <div>
          <label htmlFor="Search" className="block text-sm font-semibold text-gray-900">General Search</label>
                <input
                className="mt-1 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm"
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}/>
          
          </div>
        </div>
       </div>
      </div> 
      


        {/* Filtered Cards */}
        <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentApprenticeships.map((apprenticeship) => (
            <Card key={apprenticeship.id} className="w-12/12 mb-2 flex flex-col h-full">
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
        <div className=" gap-4">
        <div className="pagination-controls container mx-auto items-center justify-center">
          <Button className="bg-slate-200 text-slate-900 px-4 text-lg hover:bg-lime-600 mt-5"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="px-4">Page {currentPage}</span>
          <Button className="bg-slate-200 text-slate-900 px-4 text-lg hover:bg-lime-600 mt-5"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastItem >= filteredApprenticeships.length}
          >
            Next
          </Button>
        </div>
        </div>
        
      </div>
    </div>
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




