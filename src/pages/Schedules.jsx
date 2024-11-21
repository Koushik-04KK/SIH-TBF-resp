import React from 'react';
import { FaRupeeSign, FaClock, FaCog } from 'react-icons/fa'; // Import icons

const Schedules = () => {
  return (
    <div className="bg-customColor-otherpagesbackground w-auto flex flex-col items-center py-8">
      <div className="min-w-[1300px] bg-customColor-rmcardbackground rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button className="bg-[#387A79] text-white px-4 py-2 rounded-3xl hover:bg-teal-600">
            Start Monitoring
          </button>
          <h1 className="text-3xl font-normal text-gray-700">MAINTENANCE SCHEDULE</h1>
          <button className="bg-[#BE4848] text-white px-4 py-2 rounded-3xl hover:bg-red-600">
            Stop Monitoring
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left: Maintenance of Components */}
          <div className="col-span-2 bg-white rounded-lg shadow-md p-4 flex flex-col relative">
            <h2 className="text-xl font-normal text-[#387A79] absolute top-4 left-1/2 transform -translate-x-1/2">
              MAINTENANCE OF COMPONENTS
            </h2>
            <div className="mt-16 h-[150px] rounded-lg flex items-center justify-center">
              <FaCog size={30} className="absolute top-4 right-4 text-[#387A79]" /> {/* Placeholder */}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col space-y-6">
            {/* Total Maintenance Cost */}
            <div className="bg-[#4D8379] rounded-lg shadow-md p-6 relative text-white h-full">
              <h2 className="text-lg font-semibold">TOTAL MAINTENANCE COST</h2>
              <div className="mt-4 h-[100px] rounded-lg flex items-center justify-center text-black">
                {/* Increased Height */}
              </div>
              <FaRupeeSign size={30} className="absolute top-5 right-4" />
            </div>

            {/* Time Since Last Maintenance */}
            <div className="bg-[#7BB299] rounded-lg shadow-md p-6 relative text-white h-full">
              <h2 className="text-lg font-semibold">TIME SINCE LAST MAINTENANCE</h2>
              <div className="mt-4 h-[100px] rounded-lg flex items-center justify-center text-black">
                {/* Increased Height */}
              </div>
              <FaClock size={30} className="absolute top-5 right-4" />
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Schedules;
