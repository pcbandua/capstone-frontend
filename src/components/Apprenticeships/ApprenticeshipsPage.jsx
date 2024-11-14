import { ApprenticeshipsIndex } from "./ApprenticeshipsIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "../Modal";
import { ApprenticeshipsShow } from "./ApprenticeshipsShow";
import { SignupPageApprentice } from "../Auth/SignupPageApprentice";
import { SignupPageEmployer } from "../Auth/SignupPageEmployer";
import { LoginPage } from "../Auth/LoginPage";

export function ApprenticeshipsPage() {
  const [isApprenticeshipsShowVisible, setIsApprenticeshipsShowVisible] = useState(false);
  const [currentApprenticeship, setCurrentApprenticeship] = useState({});


  const [apprenticeships, setApprenticeships] = useState ([])
    const handleIndex = () => {
      console.log("handleIndex");
      axios.get("http://localhost:3000/apprenticeships.json").then ((response) => {
        console.log(response.data);
        setApprenticeships(response.data);
      });
    };

    const handleShow = (apprenticeship) => {
           console.log("handleShow", apprenticeship);
           setIsApprenticeshipsShowVisible(true);
           setCurrentApprenticeship(apprenticeship);
         };
      
         const handleClose = () => {
           console.log("handleClose");
           setIsApprenticeshipsShowVisible(false);
         };

    useEffect(handleIndex, []);
  
  return (
    <main>
    
      <ApprenticeshipsIndex apprenticeships={apprenticeships} onShow={handleShow}/>
      <Modal show={isApprenticeshipsShowVisible} onClose={handleClose}>
        <ApprenticeshipsShow apprenticeship={currentApprenticeship}/>
      </Modal>
    </main>
  )
}