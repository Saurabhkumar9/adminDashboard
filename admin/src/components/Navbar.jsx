import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function Navbar() {
  // login model handel
  const [isOpen, setIsOpen] = useState(false);
  // signup model handle
  const [signisopen, setSigninopen] = useState(false);

  // navbar made stricy

  return (
    <>
      <div className="navbar bg-gray-900 p-4 text-white">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            E-learning
          </a>
        </div>
        <div className="flex-none">
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setIsOpen(true)}
                className="text-white hover:text-gray-300"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => setSigninopen(true)}
                className="text-white hover:text-gray-300"
              >
                SignUp
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
      <Signup isOpen={signisopen} setIsOpen={setSigninopen} />
    </>
  );
}

export default Navbar;
