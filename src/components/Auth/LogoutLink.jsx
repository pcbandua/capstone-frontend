import axios from "axios";
import { Button, buttonVariants } from "../ui/button";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
   
    <Button onClick={handleClick}>
      Logout
    </Button>
  );
}

