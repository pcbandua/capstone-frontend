

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export function ApprenticeshipsIndex({ apprenticeships, onShow }) {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="py-6 max-md:col-span-2" id="signup">
      <div className="text-3xl mb-4">Apprenticeship Opportunities</div>

        {/* Search Box */}
        
      <div className="py-6 bg-slate-300">
        <p>Search: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} /></p>
        <h1>{searchTerm}</h1>
        </div>
      
      {/* Map Function   */}
      
      {/* {apprenticeships.filter((apprenticeships) => apprenticeship.title.toLowerCase().includes(apprenticeshipSearch)).map((apprenticeship) => ( */}

      {apprenticeships.filter((apprenticeship) => apprenticeship.title.toLowerCase().includes(searchTerm.toLowerCase())).map(apprenticeship => (
        <Card key={apprenticeship.id} className="w-96
         mb-4 ">
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
          <CardContent>
            <p><b>Best for Holland Codes:</b> {apprenticeship.holland_code_preference}</p>
            <p><b>Hourly Pay Rate:</b> {apprenticeship.compensation}</p>
            <p><b>Time Commitment:</b> {apprenticeship.duration}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => onShow(apprenticeship)} variant="outline">
              More Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}