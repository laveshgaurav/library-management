import React, { useState } from "react";

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
        <div className="w-3/5"></div>
      </div>
    </div>
  );
}

export default App;
