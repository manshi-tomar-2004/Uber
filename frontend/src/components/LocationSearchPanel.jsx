import React from "react";
const LocationSearchPanel = (props) => {
  console.log(props)
  const locations = [
    "101, Sector 50, Noida, Uttar Pradesh, 201301",
    "NH 24, Opposite Fortis Hospital, Sector 62, Noida, Uttar Pradesh 201309",
    "Plot No. M-03, Sector 18, DLF Mall of India, Noida, Uttar Pradesh 201301",
    "Captain Vijayant Thapar Marg, Sector 15, Noida, Uttar Pradesh 201301",
  ];
  return (
    <div>
      {locations.map(function (elem,idx) {
        return (
          <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className="flex border-gray-200 active:border-black active:bg-gray-200 items-center gap-4 justify-start my-3 mb-4 p-3 border-2 rounded-2xl">
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium ">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
