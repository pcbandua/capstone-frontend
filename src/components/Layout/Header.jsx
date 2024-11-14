import { SignupPage } from "../Auth/SignupPage"
import { Link } from "react-router-dom"
import { LogoutLink } from "../Auth/LogoutLink"
import { LoginPage } from "../Auth/LoginPage";

export function Header() {
let authenticationLinks;
if (localStorage.jwt === undefined) {
  // when logged out
  console.log("logged out") 
authenticationLinks = (
  <div>
    <Link to="/login">Login</Link>  |    
    <Link to="/signup">Sign Up</Link>
  </div>
)}
  else {
    // logged in
    console.log("I am logged in")
    authenticationLinks = (
    <LogoutLink />  
    )
  }

  return (
    <header>
      <nav className="bg-slate-100 container mx-auto text-slate-100 py-4">
        <img src="src/assets/Logo@2x.png" alt="" />
        <div>
          <Link to="/">Home</Link>
        </div> 
        <div>
          
        </div><Link to="/">View Apprenticeships</Link> | <Link to="/">View Apprenticeships</Link>{authenticationLinks} 
      </nav>
    </header>
  )
}