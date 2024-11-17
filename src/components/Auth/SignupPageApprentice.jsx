import axios from "axios";
import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";

export function SignupPageApprentice() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/apprentices.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
<div className="min-h-36 py-40" id="login">
      <div className="container mx-auto">
        <div className="flex w-8/12 mx-auto rounded-xl border bg-card text-card-foreground shadow">

        {/* Left Side */}
        <div className="flex flex-col items-center justify-center w-1/2 py-16 px-12 bg-no-repeat bg-cover bg-center aspect-[1097/845] bg-gradient-to-tr from-[#98ff53] to-[#15e0ff] opacity-100" style={{backgroundImage:`url('src/assets/pics/student-learning-how-to-do-building-work-2024-06-25-18-30-55-utc.jpg')`, backgroundSize: 'cover',
   backgroundPosition: 'center'}}>
         
          {/* <div className="text-3xl mb-4 font-semibold">
            <h1>Your Future Awaits</h1>
          </div>
          <div>
            <p>Connecting Your Passion and Skills to Real Opportunities</p>
          </div> */}
        </div>

        {/* Right Side */}
        <div className="w-1/2 py-16 px-12" id="signup">
    <div className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center mb-12" >Signup As An Apprentice</div>
    <ul>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mt-3">
              <label htmlFor="Email" className="block text-sm font-semibold text-gray-900">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm" required
              />
            </div>

            <div className="mt-3">
              <label htmlFor="Password" className="block text-sm font-semibold text-gray-900">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm" required
              />
            </div>

            <div className="mt-3">
              <label htmlFor="Password Confirmation" className="block text-sm font-semibold text-gray-900">
                Password Confirmation
              </label>
              <input
                name="password_confrimation"
                type="password_confrimation"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm" required
              />
            </div>

            <div className="mt-3">
              <label htmlFor="Address" className="block text-sm font-semibold text-gray-900">
                Address
              </label>
              <input
                name="address"
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm" required
              />
            </div>

            <div className="mt-5 mb-4">
            <p className="block text-lg font-semibold text-gray-900">What's Your Highest Level of Education?</p>
              
            </div>

      <div>
        <div class="flex items-center mb-4">
          <input type="radio" id="Highschool_GED" name="education" value="Highschool G.E.D." class="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="Highschool_GED" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Highschool G.E.D.</label><br />
        </div>
        
        <div class="flex items-center mb-4">
          <input type="radio" id="Associates_Degree" name="education" value="Associates Degree" class="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="Associates_Degree" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Associates Degree</label><br />
        </div>

        <div class="flex items-center mb-4">
          <input type="radio" id="Undergraduate_Degree" name="education" value="Undergraduate Degree" class="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="Undergraduate_Degree" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Undergraduate Degree</label><br />
        </div>
    
        <div class="flex items-center mb-4">
          <input type="radio" id="Graduate_Degree_or_Higher" name="education" value="Graduate Degree or Higher" class="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="Graduate_Degree_or_Higher" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Graduate Degree or Higher</label><br />
        </div>
      </div>

      <Button className="bg-lime-400 text-slate-900 w-full text-lg hover:bg-lime-600 mt-5" type="submit">Signup As An Apprentice</Button>
    </form>
  </div>
      </div>
    </div>
  </div>
);


    
}


