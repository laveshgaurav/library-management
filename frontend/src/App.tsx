/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { login } from "./services/http.service";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("isLoggedIn")
      ? JSON.parse(localStorage.getItem("isLoggedIn") || "false")
      : false,
  );
  const [token, setToken] = useState<string>(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token") || "")
      : "",
  );

  const [userInput, setUserInput] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await login(userInput);
      console.log("Response", response);
    } catch (error) {
      /* empty */
    }
  };

  return (
    <div className="">
      <div className="h-screen w-screen border-[4px] border-red-700">
        <div className="w-2/5 p-8">
          <h1>
            Welcome to our
            <br />
            Library
          </h1>
        </div>
        <div className="w-3/5">
          <input
            value={userInput.email}
            onChange={(e) =>
              setUserInput((p) => ({
                ...p,
                email: e.target.value,
              }))
            }
            placeholder="Enter Email"
          />

          <input
            value={userInput.password}
            onChange={(e) =>
              setUserInput((p) => ({
                ...p,
                password: e.target.value,
              }))
            }
            placeholder="Enter Password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
