import React from 'react';
import graphicon from '../assets/uim_graph-bar.svg';
import predictionicon from '../assets/material-symbols_online-prediction.svg';

const RULPrediction = () => {
  return (
    <div className="bg-customColor-otherpagesbackground min-h-screen w-full flex flex-col items-center py-8">
      {/* Main Container */}
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
    REMAINING USEFUL LIFE PREDICTION
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
          className="
            grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 lg:gap-x-6"
        >
          {/* Left Card */}
          <div
            className="
              bg-white rounded-3xl shadow-lg p-4 md:p-6
              col-span-1 md:col-span-2"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-base md:text-lg font-normal text-gray-700">
                REMAINING USEFUL LIFE STATISTICS (IN WEEKS)
              </h2>
              <img src={graphicon} alt="Graph Icon" className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            {/* Add Space for Graph */}
            <div className="w-full min-h-[200px] md:min-h-[350px] bg-gray-100 rounded mt-4">
              {/* Graph Placeholder */}
            </div>
          </div>

          {/* Right Card */}
          <div
            className="bg-white rounded-3xl shadow-lg p-4 md:p-6 col-span-1"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-base md:text-lg font-normal text-gray-700">
                PREDICTED RUL OF THE SYSTEM
              </h2>
              <img
                src={predictionicon}
                alt="Prediction Icon"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </div>
            {/* Add Space for Graph */}
            <div className="w-full min-h-[200px] md:min-h-[350px] bg-gray-100 rounded mt-4">
              {/* Graph Placeholder */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RULPrediction;
