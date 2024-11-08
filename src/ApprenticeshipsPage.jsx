import { ApprenticeshipsIndex } from "./ApprenticeshipsIndex";
import { useState, useEffect } from "react";
import axios from "axios";

export function ApprenticeshipsPage() {

  const [apprenticeships, setApprenticeships] = useState ([])
    const handleIndex = () => {
      console.log("handleIndex");
      axios.get("http://localhost:3000/apprenticeships.json").then ((response) => {
        console.log(response.data);
        setApprenticeships(response.data);
      });
    };

    useEffect(handleIndex, []);
  
  return (
    <main>
      <h1>Get Paid While You Learn</h1>

      <ApprenticeshipsIndex apprenticeships={apprenticeships} />
    </main>
  )
}