/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import LoginPage from "./pages/LoginPage";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("isLoggedIn")
      ? JSON.parse(localStorage.getItem("isLoggedIn") || "false")
      : false,
  );
  const [token, setToken] = useState<string>(
    localStorage.getItem("token")
      ? (localStorage.getItem("token") as string)
      : "",
  );
  const [userDetails, setUserDetails] = useState<unknown>(
    localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails") || "{}")
      : {},
  );

  return (
    <div className="">
      <LoginPage
        setIsLoggedIn={setIsLoggedIn}
        setToken={setToken}
        setUserDetails={setUserDetails}
      />
    </div>
  );
}

export default App;
