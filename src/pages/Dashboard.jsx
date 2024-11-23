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
        w-full max-w-[1300px]"
      >
        {/* Header */}
        <div className="flex flex-wrap justify-center items-center mb-8 md:justify-between">
          <button className="bg-[#387A79] text-white hidden md:block px-6 py-2 rounded-3xl transition-all duration-300 hover:bg-teal-600 hover:scale-105">
            Start Monitoring
          </button>
          <h1 className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-700 text-center">
            REALTIME METRICS
          </h1>
          <button className="bg-[#BE4848] text-white hidden md:block px-6 py-2 rounded-3xl transition-all duration-300 hover:bg-red-600 hover:scale-105">
            Stop Monitoring
          </button>
        </div>

        {/* Fixed Buttons for Mobile */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 md:hidden">
          <div className="flex justify-between">
            <button className="w-1/2 bg-[#387A79] text-white py-3 text-center transition-all duration-300 hover:bg-teal-600">
              Start
            </button>
            <button className="w-1/2 bg-[#BE4848] text-white py-3 text-center transition-all duration-300 hover:bg-red-600">
              Stop
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 md:grid md:grid-cols-3 md:gap-8 md:flex-row lg:flex-row">
          {/* Left Parameters */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-6">
            {[{ title: "SPEED (RPM)", value: "547 RPM", icon: speedicon },
              { title: "CURRENT DRAWN", value: "15A", icon: currenticon },
              { title: "VIBRATION", value: "0.25g", icon: vibrationicon },
            ].map((metric, index) => (
              <div
                key={index}
                className={`bg-gray-100 p-6 rounded-3xl shadow flex items-center justify-between h-28 transition-transform duration-300 hover:shadow-2xl hover:scale-105 ${index === 2 ? 'mb-4 sm:mb-0' : ''}`}
              >
                <div className="flex flex-col items-start">
                  <p className="font-bold text-sm md:text-base lg:text-base text-gray-600 mb-2">
                    {metric.title}
                  </p>
                  <div className="text-xl md:text-lg lg:text-2xl font-semibold">
                    {metric.value}
                  </div>
                </div>
                <img
                  src={metric.icon}
                  alt={`${metric.title} icon`}
                  className="w-8 md:w-6 lg:w-10 transition-transform duration-300 hover:rotate-12"
                />
              </div>
            ))}
          </div>

          {/* Fan Animation */}
          <div className="flex justify-center items-center my-6 lg:my-0 order-first sm:order-first md:order-none lg:order-none">
            <img
              className="w-64 md:w-64 lg:w-96 animate-spin-slow"
              src={fangif}
              alt="Fan Animation"
            />
          </div>

          {/* Right Parameters */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-6">
            {[{ title: "AIR PRESSURE", value: "5.2 bar", icon: airpressure },
              { title: "TEMPERATURE", value: "75°C", icon: temperatureicon },
              { title: "SENSORS PLACED", value: "12", icon: sensoricon },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-3xl shadow flex items-center justify-between h-28 transition-transform duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="flex flex-col items-start">
                  <p className="font-bold text-sm md:text-base lg:text-base text-gray-600 mb-2">
                    {metric.title}
                  </p>
                  <div className="text-xl md:text-lg lg:text-2xl font-semibold">
                    {metric.value}
                  </div>
                </div>
                <img
                  src={metric.icon}
                  alt={`${metric.title} icon`}
                  className="w-8 md:w-6 lg:w-10 transition-transform duration-300 hover:rotate-12"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Predicted Fault */}
        <div className="bg-gray-100 mt-8 p-6 rounded-3xl shadow flex items-center justify-between h-32 transition-transform duration-300 hover:shadow-2xl hover:scale-105">
          <div className="flex flex-col items-start">
            <p className="font-bold text-sm md:text-base lg:text-base text-gray-600 mb-2">
              PREDICTED FAULT
            </p>
            <div className="text-xl md:text-lg lg:text-2xl font-semibold text-red-600">
              Motor Overload
            </div>
          </div>
          <img
            src={faulticon}
            alt="Fault icon"
            className="w-8 md:w-6 lg:w-10 transition-transform duration-300 hover:rotate-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
