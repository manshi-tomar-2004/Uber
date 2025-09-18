import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userData, setUserData] = useState({});
  const SubmitHandler = (e) => {
    e.preventDefault();
    setUserData( {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
    });
    
    console.log(userData);
    setEmail("");
    setPassword("");
    setfirstName("");
    setlastName("");
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
          <h3 className="text-lg font-medium mb-2">What's our Captain's name</h3>
          <div className="flex">
            <input
              required
              className=" bg-[#f1f1f18f] mb-3 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
            <input
              required
              className=" bg-[#f1f1f18f] mb-3 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's our Captain's email?</h3>
          <input
            required
            className=" bg-[#f1f1f18f] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Enter your email here..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg font-medium"> Enter password</h3>
          <input
            required
            className=" bg-[#f1f1f18f] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className=" bg-lime-600 text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg">
            Signing..
          </button>
        </form>
        <p className="text-center">
          Already exist?{" "}
          <Link
            to="/captain-login"
            className="text-1xl font-bold text-lime-950"
          >
            Login here...
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/signup"
          className=" flex items-center justify-center bg-lime-950 text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg"
        >
          Sign up as a User
        </Link>
        <p className="text-xs">
          By proceeding, you consent to get{" "}
          <b className="underline text-lime-950">
            calls, WhatsApp or SMS messages
          </b>
          , including by automated means, from Uber and its affilates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
