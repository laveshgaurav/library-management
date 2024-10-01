import { useState } from "react";
import { register } from "../services/http.service";

// Function
function Register() {
  // State
  const [loading, setLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<{
    email: string;
    password: string;
    name: string;
  }>({
    email: "",
    password: "",
    name: "",
  });

  // Register Handler
  const handleRegister = async () => {
    try {
      setLoading(true);
      const response = await register(userInput);
      if (response?.data?.message) {
        alert(response?.data?.message);
      }
    } catch (e) {
      console.error(e);
      alert("User already exists.");
      /* empty */
    } finally {
      setLoading(false);
      setUserInput({
        email: "",
        password: "",
        name: "",
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-48 font-bold">Register</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
        <br /> tempor incididunt ut labore et .
      </h2>
      <div className="flex flex-col gap-y-3">
        <label>
          <p>Name</p>
          <input
            className="m-1 w-full rounded-md border-[2px] border-blue bg-red p-2"
            value={userInput.name}
            onChange={(e) =>
              setUserInput((p) => ({
                ...p,
                name: e.target.value,
              }))
            }
            placeholder="Enter Name"
          />
        </label>
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
          onClick={handleRegister}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
}

export default Register;
