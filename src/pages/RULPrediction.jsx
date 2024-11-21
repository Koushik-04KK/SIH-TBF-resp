import React from 'react';
import graphicon from '../assets/uim_graph-bar.svg';
import predictionicon from '../assets/material-symbols_online-prediction.svg';

const RULPrediction = () => {
  return (
    <div className="bg-customColor-otherpagesbackground min-h-screen w-full flex flex-col items-center py-8">
      <div className="min-w-[1300px] bg-customColor-rmcardbackground rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button className="bg-[#387A79] text-white px-4 py-2 rounded-3xl hover:bg-teal-600">
            Start Monitoring
          </button>
          <h1 className="text-3xl font-normal text-gray-700">
            REMAINING USEFUL LIFE PREDICTION
          </h1>
          <button className="bg-[#BE4848] text-white px-4 py-2 rounded-3xl hover:bg-red-600">
            Stop Monitoring
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-3 gap-x-6">
          {/* Left Card */}
          <div className="col-span-2 bg-white rounded-3xl shadow-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-normal text-gray-700">
                REMAINING USEFUL LIFE STATISTICS (IN WEEKS)
              </h2>
              <img src={graphicon} alt="Graph Icon" className="w-6 h-6" />
            </div>
            {/* Add Space for Graph */}
            <div className="w-full min-h-[350px] bg-gray-100 rounded mt-4">
              {/* Graph Placeholder */}
            </div>
          </div>

          {/* Right Card */}
          <div className="col-span-1 bg-white rounded-3xl shadow-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-normal text-gray-700">
                PREDICTED RUL OF THE SYSTEM
              </h2>
              <img src={predictionicon} alt="Prediction Icon" className="w-6 h-6" />
            </div>
            {/* Add Space for Graph */}
            <div className="w-full min-h-[350px] bg-gray-100 rounded mt-4">
              {/* Graph Placeholder */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RULPrediction;
