import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const SubmitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen bg-lime-200 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="UBER"
        />
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" bg-[#f1f1f18f] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="text"
            placeholder="Enter your email here..."
          />
          <h3 className="text-lg font-medium"> Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" bg-[#f1f1f18f] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className=" bg-lime-600 text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link
            to="/captain-signup"
            className="text-1xl font-bold text-lime-950 "
          >
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className=" flex items-center justify-center bg-lime-950 text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg"
        >
          Sign in as User
        </Link>
        <p className="text-xs">
          This site is protected by{" "}
          <b className="underline text-lime-950">reCAPTCHA</b> and the{" "}
          <b className="underline text-lime-950">Google Privacy Policy</b> and{" "}
          <b className="underline text-lime-950"> Terms of Service</b> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainLogin;
