import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        { email, password }
      );

      if (response.status === 200) {
        const data = response.data;

        // update context
        setUser(data.user);

        // store in localStorage
        localStorage.setItem("token", data.token);

        // navigate to home
        navigate("/home");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please try again.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen bg-blue-200 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="UBER"
        />
        <form onSubmit={SubmitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#f1f1f18f] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="text"
            placeholder="Enter your email here..."
          />
          <h3 className="text-lg font-medium">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#f1f1f18f] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-blue-500 text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-1xl font-bold text-blue-950">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="flex items-center justify-center bg-blue-950 text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg"
        >
          Sign in as Captain
        </Link>
        <p className="text-xs">
          This site is protected by{" "}
          <b className="underline text-blue-700">reCAPTCHA</b> and the{" "}
          <b className="underline text-blue-700">Google Privacy Policy</b> and{" "}
          <b className="underline text-blue-700">Terms of Service</b> apply.
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
