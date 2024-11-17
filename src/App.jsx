import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./components/Layout/Header";
import { SignupPage } from "./components/Auth/SignupPage";
import {LoginPage} from "./components/Auth/LoginPage"
import { ApprenticeshipsPage}  from "./components/Apprenticeships/ApprenticeshipsPage"
import { Footer } from "./components/Layout/Footer"
import { LandingPage } from "./LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    element: (
      <div className="font-rubik container mx-auto">
        <Header />
        <div className="">
        <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/landingpage",
        element: <LandingPage />,
      },
      {
        path: "/",
        element: <ApprenticeshipsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;