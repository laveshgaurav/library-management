/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import { getBookList, getBurrowedBooks } from "./services/http.service";
import { T_Book } from "./types/Type";
import HomePage from "./pages/HomePage";

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
  const [userDetails, setUserDetails] = useState<any>(
    localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails") || "{}")
      : {},
  );
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  // Variables
  const userLoggedIn = !!token && isLoggedIn && !!userDetails?.email;

  // Functions
  // Logout
  const handleLogout = (): void => {
    setIsLoggedIn(false);
    setToken("");
    setUserDetails({});
    setToggleDrawer(false);
    localStorage.clear();
  };

  return (
    <div className="">
      {userLoggedIn ? (
        <HomePage
          handleLogout={handleLogout}
          setToggleDrawer={setToggleDrawer}
          toggleDrawer={toggleDrawer}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      ) : (
        <LoginPage
          setIsLoggedIn={setIsLoggedIn}
          setToken={setToken}
          setUserDetails={setUserDetails}
        />
      )}
    </div>
  );
}

export default App;
