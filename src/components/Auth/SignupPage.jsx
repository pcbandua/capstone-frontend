import axios from "axios";
import { useState } from "react";
import { SignupPageApprentice } from "./SignupPageApprentice";
import { useLoaderData, useNavigate } from "react-router-dom";
import { SignupPageEmployer } from "./SignupPageEmployer";

export function SignupPage() {

  return (
    <div className="py-6" id="signup">
      <SignupPageApprentice />
    </div>
  );
}

