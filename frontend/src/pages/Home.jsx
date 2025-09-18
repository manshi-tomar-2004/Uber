import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
  <div className=" bg-cover bg-center bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/29cb27182519763.652f576089c2c.jpg)] h-screen pt-8 flex flex-col w-full ">
    <img
      className="w-16 ml-8 absolute"
      src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      alt="UBER"
    />

    {/* White box pushed to bottom */}
    <div className=" bg-white py-5 px-5 pb-7 mt-auto">
      <h2 className="text-3xl font-bold ">Get Started with Uber</h2>
      <Link to="/login" className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">
        Continue
      </Link>
    </div>
  </div>
</div>

  );
};

export default Home;
