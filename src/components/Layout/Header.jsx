import { SignupPage } from "../Auth/SignupPage"
import { Link } from "react-router-dom"
import { LogoutLink } from "../Auth/LogoutLink"

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
      <nav className="bg-slate-600 text-slate-100 py-4">
        <Link to="/">Home</Link> | <Link to="/">View Apprenticeships</Link> | {authenticationLinks} 
      </nav>
    </header>
  )
}