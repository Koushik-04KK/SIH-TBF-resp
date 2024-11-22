import React from "react";
import speedicon from "../assets/lets-icons_speed-alt.svg";
import airpressure from "../assets/lets-icons_pressure.svg";
import currenticon from "../assets/mdi_high-voltage.svg";
import temperatureicon from "../assets/oui_temperature.svg";
import vibrationicon from "../assets/material-symbols-light_vibration.svg";
import sensoricon from "../assets/bx_chip.svg";
import faulticon from "../assets/ic_baseline-error.svg";
import fangif from "../assets/fangif.gif";

const Dashboard = () => {
  return (
    <div className="bg-customColor-otherpagesbackground w-full flex flex-col items-center py-8">
      <div
        className="bg-customColor-rmcardbackground rounded-lg shadow-xl 
          p-4 md:p-6 lg:p-8 
          w-full max-w-[1300px] lg:min-w-[1300px]"
      >
        {/* Header */}
   
      <div className="flex flex-wrap justify-center items-center mb-8 md:justify-between">
  <button className="bg-[#387A79] text-white hidden md:block lg:block px-6 py-2 rounded-3xl hover:bg-teal-600">
    Start Monitoring
  </button>
  <h1 className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-700 text-center">
    REALTIME METRICS
  </h1>
  <button className="bg-[#BE4848] text-white hidden md:block lg:block px-6 py-2 rounded-3xl hover:bg-red-600">
    Stop Monitoring
  </button>
</div>
        <div 
  className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 md:hidden"
>
  <div className="flex justify-between">
    <button 
      className="w-1/2 bg-[#387A79] text-white py-3 text-center hover:bg-teal-600 rounded-none"
      // onClick={handleStart} // Add your start function
    >
      Start
    </button>
    <button 
      className="w-1/2 bg-[#BE4848] text-white py-3 text-center hover:bg-red-600 rounded-none"
      // onClick={handleStop} // Add your stop function
    >
      Stop
    </button>
  </div>
</div>
        {/* Grid Section */}
        <div
          className="flex flex-col 
            lg:flex-row lg:justify-between lg:gap-8"
        >
          <div
            className="grid 
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 
              gap-x-6 gap-y-6 
              w-full"
          >
            {/* Cards */}
            {[
              { title: "SPEED (RPM)", value: "547 RPM", icon: speedicon },
              { title: "CURRENT DRAWN", value: "15A", icon: currenticon },
              { title: "VIBRATION", value: "0.25g", icon: vibrationicon },
              { title: "AIR PRESSURE", value: "5.2 bar", icon: airpressure },
              { title: "TEMPERATURE", value: "75°C", icon: temperatureicon },
              { title: "SENSORS PLACED", value: "12", icon: sensoricon },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 
                  rounded-3xl shadow 
                  flex flex-col items-center justify-center text-center
                  lg:w-72 md:w-60"
              >
                <p className="font-bold text-sm lg:text-base text-gray-600 mb-2">
                  {metric.title}
                </p>
                <div className="text-xl lg:text-2xl font-semibold">{metric.value}</div>
                <img
                  src={metric.icon}
                  alt={`${metric.title} icon`}
                  className="mt-2 w-8 lg:w-10"
                />
              </div>
            ))}

            {/* Predicted Fault */}
            <div
              className="bg-gray-100 md:w-[88%] md: p-4 rounded-3xl shadow 
                flex flex-col items-center justify-center text-center 
                col-span-1 md:col-span-2 lg:col-span-3"
            >
              <p className="font-bold text-sm lg:text-base text-gray-600 mb-2">
                PREDICTED FAULT
              </p>
              <div className="text-xl lg:text-2xl font-semibold text-red-600">
                Motor Overload
              </div>
              <img
                src={faulticon}
                alt="Fault icon"
                className="mt-2 w-8 lg:w-10"
              />
            </div>
          </div>

          {/* Animated Fan */}
          <div
            className="flex justify-center items-center 
              order-first lg:order-none 
              w-full lg:w-auto"
          >
            <img
              className="w-72 sm:w-48 md:w-60 lg:w-full"
              src={fangif}
              alt="Fan Animation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
