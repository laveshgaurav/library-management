import React, { useState } from "react";
import { login } from "../services/http.service";

// Props
type Props = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setUserDetails: React.Dispatch<unknown>;
};

// Function
function Login({ setIsLoggedIn, setToken, setUserDetails }: Props) {
  // state
  const [loading, setLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  // Login Handler
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await login(userInput);
      console.log("Response", response);
      if (response?.status === 200) {
        setIsLoggedIn(true);
        setToken(response?.data?.token);
        setUserDetails(response?.data?.user);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem(
          "userDetails",
          JSON.stringify(response?.data?.user)
        );
      }
    } catch (e: any) {
      console.error(e);
    } finally {
      setLoading(false);
      setUserInput({
        email: "",
        password: "",
      });
    }
  };
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-48 font-bold">Sign In</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
        <br /> tempor incididunt ut labore et .
      </h2>
      <div className="flex flex-col gap-y-3">
        <label>
          <p>Email</p>
          <input
            className="w-full rounded-md border-[2px] border-blue p-2"
            value={userInput.email}
            onChange={(e) =>
              setUserInput((p) => ({
                ...p,
                email: e.target.value,
              }))
            }
            placeholder="Enter Email"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            className="w-full rounded-md border-[2px] border-blue p-2"
            value={userInput.password}
            onChange={(e) =>
              setUserInput((p) => ({
                ...p,
                password: e.target.value,
              }))
            }
            placeholder="Enter Password"
          />
        </label>
        <button
          className="w-fit rounded-md bg-red px-8 py-2 text-white"
          onClick={handleLogin}
        >
          {loading ? "Logging In..." : "Log In"}
        </button>
      </div>
    </div>
  );
}

export default Login;
