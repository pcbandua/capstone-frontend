

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
    <>
      <div className="py-6 max-md:col-span-2" id="signup">
        

        {/* Search Box */}
        <div className="py-6 bg-cyan-500 rounded-md container mx-auto flex items-center justify-center">
        <div className="text-3xl mb-4 font-semibold">Browse Apprenticeships</div>  
          <div>
          <p>
            Search: <input className="rounded-md lg:w-96
            " type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
          </p>
      
          </div>
        </div>

        {/* Cards */}
        <div className=" py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {apprenticeships
            .filter((apprenticeship) => apprenticeship.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((apprenticeship) => (
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
                  <Button className="bg-lime-400 w-full"  onClick={() => onShow(apprenticeship)} variant="outline">
                    View Details
                  </Button>
                  </div>
                  
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}