import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen bg-blue-200 flex flex-col justify-between">
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
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
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
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
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
          <button className=" bg-blue-500 text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already exist?{" "}
          <Link to="/login" className="text-1xl font-bold text-blue-950">
            Login here...
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-signup"
          className=" flex items-center justify-center bg-blue-950 text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg"
        >
          Sign up as a Captain
        </Link>
        <p className="text-xs">
          By proceeding, you consent to get{" "}
          <b className="underline text-blue-700">
            calls, WhatsApp or SMS messages
          </b>
          , including by automated means, from Uber and its affilates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
