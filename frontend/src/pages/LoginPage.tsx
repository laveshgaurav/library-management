import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

// Props
type Props = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setUserDetails: React.Dispatch<unknown>;
};
function LoginPage({ setIsLoggedIn, setToken, setUserDetails }: Props) {
  // State
  const [activeSection, setActiveSection] = useState<string>("Login");

  return (
    <div className="flex h-screen w-screen items-center justify-between md:h-auto md:flex-col">
      <div className="h-full w-2/5 bg-red p-12 md:w-full md:p-8">
        <h1 className="text-60 text-white md:text-48">
          Welcome to our
          <br />
          Library
        </h1>
        <h2 className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h2>
      </div>
      <div className="flex h-full w-3/5 flex-col items-center justify-center p-10 md:w-full md:p-8">
        {/* Login Component */}
        {activeSection === "Login" && (
          <>
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setToken={setToken}
              setUserDetails={setUserDetails}
            />
            <h2 className="my-4 font-normal">
              Don't have an account ?{" "}
              <span
                className="cursor-pointer font-bold text-red"
                onClick={() => setActiveSection("Register")}
              >
                Register
              </span>
            </h2>
          </>
        )}
        {/* Register Component */}
        {activeSection === "Register" && (
          <>
            <Register />
            <h2 className="my-4 font-normal">
              Already have an account ?{" "}
              <span
                className="cursor-pointer font-bold text-red"
                onClick={() => setActiveSection("Login")}
              >
                Sign In
              </span>
            </h2>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
