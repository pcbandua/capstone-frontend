import { SignupPage } from "../Auth/SignupPage"

export function Header() {
  return (
    <header>
      <nav className="bg-slate-600 text-slate-100 py-2">
        <a href="#">Home</a> | <a href="#">View Apprenticeships</a> | <a href="./Auth/SignupPage.jsx">Sign Up</a> |  <a href="#">Login for Apprentices</a> |  <a href="#">Login for Employers</a> 
      </nav>
    </header>
  )
}