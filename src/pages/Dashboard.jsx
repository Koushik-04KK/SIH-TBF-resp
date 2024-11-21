import React from "react";
import speedicon from "../assets/lets-icons_speed-alt.svg"
import airpressure from "../assets/lets-icons_pressure.svg"
import currenticon from "../assets/mdi_high-voltage.svg"
import temperatureicon from "../assets/oui_temperature.svg"
import vibrationicon from "../assets/material-symbols-light_vibration.svg"
import sensoricon from "../assets/bx_chip.svg"  
import faulticon from "../assets/ic_baseline-error.svg"
import fangif from "../assets/fangif.gif"

const Dashboard = () => {
  return (
    <div className="bg-customColor-otherpagesbackground w-auto flex flex-col items-center py-8">
      <div className="min-w-[1300px] bg-customColor-rmcardbackground rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="flex justify-between space-x-52 items-center mb-8">
          <button className="bg-[#387A79] text-white px-4 py-2 rounded-3xl hover:bg-teal-600">
            Start Monitoring
          </button>
          <h1 className="text-3xl font-normal text-gray-700">REALTIME METRICS</h1>
          <button className="bg-[#BE4848] text-white px-4 py-2 rounded-3xl hover:bg-red-600">
            Stop Monitoring
          </button>
        </div>
        
        {/* Grid Section */}
        <div className="flex flex-row justify-between">
          <div className="grid grid-cols-2 gap-x-14 gap-y-8">
            {/* SPEED (RPM) */}
            <div className="bg-gray-100 w-72 p-4 rounded-3xl shadow grid-cols-4 grid-rows-3">
              <p className="font-bold font-urbanist text-gray-600 col-span-2 row-span-1">SPEED (RPM)</p>
              <div className="grid grid-cols-2">
                <div className="text-2xl font-urbanist font-semibold text-center">547 RPM</div>
                <div className="text-3xl flex justify-end items-start">
                  <img src={speedicon} alt="speedicon" />
                </div>
              </div>
            </div>

            {/* CURRENT DRAWN */}
            <div className="bg-gray-100 p-4 rounded-3xl shadow grid-cols-4 grid-rows-3">
              <p className="font-bold font-urbanist text-gray-600 col-span-2 row-span-1">CURRENT DRAWN</p>
              <div className="grid grid-cols-2">
                <div className="text-2xl font-urbanist font-semibold text-center">15A</div>
                <div className="text-3xl flex justify-end items-start">
                  <img src={currenticon} alt="currenticon" />
                </div>
              </div>
            </div>

            {/* VIBRATION */}
            <div className="bg-gray-100 p-4 rounded-3xl shadow grid-cols-4 grid-rows-3">
              <p className="font-bold font-urbanist text-gray-600 col-span-2 row-span-1">VIBRATION</p>
              <div className="grid grid-cols-2">
                <div className="text-2xl font-urbanist font-semibold text-center">0.25g</div>
                <div className="text-3xl flex justify-end items-start">
                  <img src={vibrationicon} alt="vibrationicon" />
                </div>
              </div>
            </div>

            {/* AIR PRESSURE */}
            <div className="bg-gray-100 p-4 rounded-3xl shadow grid-cols-4 grid-rows-3">
              <p className="font-bold font-urbanist text-gray-600 col-span-2 row-span-1">AIR PRESSURE</p>
              <div className="grid grid-cols-2">
                <div className="text-2xl font-urbanist font-semibold text-center">5.2 bar</div>
                <div className="text-3xl flex justify-end items-start">
                  <img src={airpressure} alt="airpressure" />
                </div>
              </div>
            </div>

            {/* TEMPERATURE */}
            <div className="bg-gray-100 p-4 rounded-3xl shadow grid-cols-4 grid-rows-3">
              <p className="font-bold font-urbanist text-gray-600 col-span-2 row-span-1">TEMPERATURE</p>
              <div className="grid grid-cols-2">
                <div className="text-2xl font-urbanist font-semibold text-center">75°C</div>
                <div className="text-3xl flex justify-end items-start">
                  <img src={temperatureicon} alt="temperatureicon" />
                </div>
              </div>
            </div>

            {/* SENSORS PLACED */}
            <div className="bg-gray-100 p-4 rounded-3xl shadow grid-cols-4 grid-rows-3">
              <p className="font-bold font-urbanist text-gray-600 col-span-2 row-span-1">SENSORS PLACED</p>
              <div className="grid grid-cols-2">
                <div className="text-2xl font-urbanist font-semibold text-center">12</div>
                <div className="text-3xl flex justify-end items-start">
                  <img src={sensoricon} alt="sensoricon" />
                </div>
              </div>
            </div>

            {/* PREDICTED FAULT */}
            <div className="bg-gray-100 col-span-2 p-4 rounded-3xl shadow grid-cols-4 grid-rows-3">
              <p className="font-bold font-urbanist text-gray-600 col-span2 row-span-1">PREDICTED FAULT</p>
              <div className="grid grid-cols-2">
              <div className="text-2xl mt-1 font-urbanist text-red-600 text-center font-semibold">Motor Overload</div>
              <div className="text-3xl flex justify-end items-start">
                <img src={faulticon} alt="faulticon" />
              </div>
              </div>
            </div>
            
          </div>
          <div>
                <img className="h-full w-full" src={fangif} alt="Fan Animation" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
