import axios from "axios";
import { useState } from "react";
import { Button } from "../ui/button";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="min-h-36 py-40" id="login">
      <div className="container mx-auto">
        <div className="flex w-96 mx-auto rounded-xl border bg-card text-card-foreground shadow">
          {/* Right Side */}
          <div className="w-full py-16 px-12">
            <div className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center mb-12">
              Login
            </div>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="mt-5">
                <label
                  htmlFor="Email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="Password"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm"
                />
              </div>
              <div className="mt-10">
                <Button
                  className="bg-lime-400 text-slate-900 w-full text-lg hover:bg-lime-600 mt-5"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// return (
//   <div className="min-h-36 py-40" id="login">
//     <div className="container mx-auto">
//       <div className="flex w-8/12 bg-slate-100 rounded-xl mx-auto shadow-lg overflow-hidden">

//         {/* Left Side */}
//         <div className="flex flex-col items-center justify-center w-1/2 py-16 px-12 bg-no-repeat bg-cover bg-center">
//           <img
//             src="https://images.unsplash.com/photo-1531496681078-27dc2277e898?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#98ff53] to-[#15e0ff] opacity-65"
//             alt=""
//           />
//           <div className="text-3xl mb-4 font-semibold">
//             <h1>“Welcome Back! Your Future Awaits”</h1>
//           </div>
//           <div>
//             <p>Connecting Your Passion and Skills to Real Opportunities</p>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="w-1/2 py-16 px-12">
//           <div className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center mb-12">
//             Login
//           </div>
//           <ul>
//             {errors.map((error) => (
//               <li key={error}>{error}</li>
//             ))}
//           </ul>
//           <form className="mb-4" onSubmit={handleSubmit}>
//             <div className="mt-5">
//               <label htmlFor="Email" className="block text-sm font-semibold text-gray-900">
//                 Email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm"
//               />
//             </div>
//             <div className="mt-5">
//               <label htmlFor="Password" className="block text-sm font-semibold text-gray-900">
//                 Password
//               </label>
//               <input
//                 name="password"
//                 type="password"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm"
//               />
//             </div>
//             <div className="mt-10">
//               <Button className="bg-lime-400 text-slate-900 w-full text-lg hover:bg-lime-600" type="submit">
//                 Login
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// );
