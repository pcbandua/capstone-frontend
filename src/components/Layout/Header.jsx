import { SignupPage } from "../Auth/SignupPage";
import { Link } from "react-router-dom";
import { LogoutLink } from "../Auth/LogoutLink";
import { LoginPage } from "../Auth/LoginPage";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import { useState } from "react";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    // when logged out
    console.log("logged out");
    authenticationLinks = (
      <div className="text-lg font-semibold text-gray-900 lg:flex">
        <div className="bg-lime-400 px-4 py-2 rounded-md">
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className="px-4 py-2 rounded-md">
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  } else {
    // logged in
    console.log("I am logged in");
    authenticationLinks = <LogoutLink />;
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white z-50">
      <nav
        className="container mx-auto flex items-center justify-between p-6 lg:px-8 text-"
        aria-label="Global"
      >
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Earn While You Learn</span>
            <img
              className="h-8 w-auto"
              src="/Logo@2x.png"
              alt="Earn While You Learn Logo"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden lg:flex lg:gap-x-12 text-md ">
          <Link to="/landingpage" className=" font-semibold text-gray-900">
            How It Works
          </Link>
          <Link to="/" className="font-semibold text-gray-900">
            For Apprentices
          </Link>
          <a
            href="https://www.roguecc.edu/counseling/hollandcodes/test.asp"
            className=" font-semibold text-gray-900"
            target="blank"
            rel="noopener norefferrer"
          >
            Get Your Holland Code Results
          </a>
        </div>

        {/* Authentication Links */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {authenticationLinks}
        </div>
      </nav>

      {/* Mobile Menu (hidden by default) */}
      {/* <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={toggleMenu}>
              <span className="sr-only">Earn While You Learn</span>
              <img className="h-8 w-auto" src="/Logo@2x.png" alt="Logo" />
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  For Apprentices
                </Link>
                <Link
                  to="/landingpage"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  How It Works
                </Link>
              </div>
              <div className="py-6">{authenticationLinks}</div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
}
