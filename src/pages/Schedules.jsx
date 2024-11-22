import React from 'react';
import { FaRupeeSign, FaClock, FaCog } from 'react-icons/fa'; // Import icons

const Schedules = () => {
  return (
    <div className="bg-customColor-otherpagesbackground w-auto flex flex-col items-center py-8">
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
    MAINTANENCE SCHEDULE
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
        {/* Main Content */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 lg:gap-6"
        >
          {/* Left: Maintenance of Components */}
          <div
            className="
              col-span-1 md:col-span-2
              bg-white rounded-lg shadow-md p-4 flex flex-col relative"
          >
            <h2 className="text-base md:text-xl font-normal text-[#387A79] absolute md:left-6 top-4 lg:left-1/2 transform lg:-translate-x-1/2">
              MAINTENANCE OF COMPONENTS
            </h2>
            <div className="mt-16 h-[100px] md:h-[150px] rounded-lg flex items-center justify-center">
              <FaCog size={24} md:size={30} className="absolute top-4 right-4 text-[#387A79]" />
              {/* Placeholder */}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col space-y-4 md:space-y-6">
            {/* Total Maintenance Cost */}
            <div className="bg-[#4D8379] rounded-lg shadow-md p-4 md:p-6 relative text-white h-full">
              <h2 className="text-sm md:text-lg font-semibold">
                TOTAL MAINTENANCE COST
              </h2>
              <div className="mt-4 h-[80px] md:h-[100px] rounded-lg flex items-center justify-center text-black">
                {/* Placeholder */}
              </div>
              <FaRupeeSign size={24} md:size={30} className="absolute top-5 right-4" />
            </div>

            {/* Time Since Last Maintenance */}
            <div className="bg-[#7BB299] rounded-lg shadow-md p-4 md:p-6 relative text-white h-full">
              <h2 className="text-sm md:text-lg font-semibold">
                TIME SINCE LAST MAINTENANCE
              </h2>
              <div className="mt-4 h-[80px] md:h-[100px] rounded-lg flex items-center justify-center text-black">
                {/* Placeholder */}
              </div>
              <FaClock size={24} md:size={30} className="absolute top-5 right-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
