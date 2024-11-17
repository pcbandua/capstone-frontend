import { ApplicationsNew } from "./ApplicationsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ApprenticeshipsShow({ apprenticeship, currentUserId }) {
  const [applications, setApplications] = useState([]);

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios
      .post("http://localhost:3000/applications.json", params)
      .then((response) => {
        setApplications([...applications, response.data]);
        successCallback();
      });
  };

  const handleCreateApplication = () => {
    const params = {
      apprentice_id: currentUserId,
      apprenticeship_id: apprenticeship.id,
    };
    console.log("Submitting application with currentUserId:", currentUserId);
    handleCreate(params, () => {
      console.log("Application submission success");
    });
  };

  return (
    <div>
      <div key={apprenticeship.id}>
        <div className="font-semibold text-2xl border-b pb-3 ">
          <h2>{apprenticeship.title}</h2>
        </div>

        <div className="space-y-2">
          <p>
            <b>Summary:</b> {apprenticeship.summary}
          </p>
          <p>
            <b>Location:</b> {apprenticeship.location_status}
          </p>
          <br />
          <p>
            <b>Required Skills:</b> {apprenticeship.skills_required}
          </p>
          <p>
            <b>Qualifications:</b> {apprenticeship.qualifications}
          </p>
          <p>
            <b>Best for Holland Codes:</b>{" "}
            {apprenticeship.holland_code_preference}
          </p>
          <p>
            <b>Hourly Compensation:</b> {apprenticeship.compensation}
          </p>
          <p>
            <b>Time Committment:</b> {apprenticeship.duration}
          </p>
          <p>
            <b>Nationally Recognized:</b>{" "}
            {apprenticeship.national_registered_status}
          </p>
        </div>
        <div className="flex justify-left pt-4 border-t mt-4">
          <Button
            className="bg-lime-400 py-2 px-4 rounded-lg hover:bg-slate-200 transition  text-slate-900"
            onClick={handleCreateApplication}
          >
            Submit Your Application
          </Button>
        </div>
      </div>
      <div>{/* Modal Content */}</div>
    </div>
  );
}
