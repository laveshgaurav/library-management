import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("isLoggedIn")
      ? JSON.parse(localStorage.getItem("isLoggedIn") || "false")
      : false
  );
  const [token, setToken] = useState<string>(
    localStorage.getItem("token")
      ? (localStorage.getItem("token") as string)
      : ""
  );
  const [userDetails, setUserDetails] = useState<any>(
    localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails") || "{}")
      : {}
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
    <>
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
    </>
  );
}

export default App;
