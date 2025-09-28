import React from "react";
import car from "../photos/car.jpg";
import bike from "../photos/bike.jpg";
import auto from "../photos/auto.jpg";

const VehiclePanle = (props) => {
  return (
    <div>
      <h5
        className=" w-[93%] text-center absolute top-0 p-4"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl "></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Chosse a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex active:border-3  active:bg-gray-200 rounded-2xl items-center justify-between w-full p-3 mb-2"
      >
        <img className="h-20" src={car} alt="car" />
        <div className="ml-1 w-1/2">
          <h4 className="text-lg font-medium">
            Moto
            <span>
              <i className="ri-user-3-fill">1</i>
            </span>
          </h4>
          <h5 className="text-sm font-medium"> 2 mins away</h5>
          <p className="text-xs font-normal text-gray-900">
            {" "}
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold"> ₹193.20 </h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full active:border-3 active:bg-gray-200 rounded-2xl items-center justify-between  p-3 mb-2"
      >
        <img className="h-20" src={bike} alt="bike" />
        <div className="ml-7 w-1/2">
          <h4 className="text-lg font-medium">
            UberGo
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="text-sm font-medium"> 2 mins away</h5>
          <p className="text-xs font-normal text-gray-900">
            {" "}
            Affordable, motor rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold"> ₹65 </h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full active:border-3 active:bg-gray-200 rounded-2xl items-center justify-between  p-3 mb-2"
      >
        <img className="h-20" src={auto} alt="car" />
        <div className="ml-5 w-1/2">
          <h4 className="text-lg font-medium">
            UberGo
            <span>
              <i className="ri-user-3-fill">3</i>
            </span>
          </h4>
          <h5 className="text-sm font-medium"> 2 mins away</h5>
          <p className="text-xs font-normal text-gray-900">
            {" "}
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold"> ₹115.20 </h2>
      </div>
    </div>
  );
};

export default VehiclePanle;
