import { useState, useEffect } from "react";
import axios from "axios";
import { EmployersNew } from "./EmployersNew";

export function EmployerProfile() {

    +   const handleCreate = (params, successCallback) => {
      +     console.log("handleCreate", params);
      +     axios.post("http://localhost:3000/employers.json", params).then((response) => {
      +       setPhotos([...photos, response.data]);
      +       successCallback();
      +     });
      +   };

    useEffect(handleIndex, []);
  
  return (
    <main>
      <h1>Hello {employer.company_name}</h1>
      <ApprenticeshipsNew />
    </main>
  )
}