import React from 'react';
import Circular from './Circular';

const Target = () => {
  return (
    <div className="w-full h-full flex flex-col p-4 font-roboto">
      <div className="w-full h-fit flex items-center gap-2">
        <div className="relative w-6 h-6 mt-2">
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
        <h1 className="text-sm font-semibold text-blue-600">Main department</h1>
      </div>
      <div className="w-full h-fit flex flex-col px-4 gap-1 mt-1">
        <h1 className="text-sm text-gray-700 tracking-wide">
          Tools & Hardware
        </h1>
        <h1 className="text-sm text-gray-600 tracking-wide">
          01/11/2024 - 30/11/2024
        </h1>
      </div>
      <div className="w-full h-fit flex flex-col items-center mt-8 gap-4">
        <Circular percentage={50} width={150} height={150} />
        <div className="w-full h-fit flex items-center justify-around ">
          <h1 className="text-sm font-medium text-gray-700">
            Total sales:{' '}
            <span className="text-blue-600 font-semibold">500 SAR</span>
          </h1>
          <h1 className="text-sm font-medium text-gray-700">
            Total target:{' '}
            <span className="text-blue-600 font-semibold">1000 SAR</span>
          </h1>
        </div>
      </div>
      <div className="w-full h-fit px-4 py-4 border-t border-gray-300 flex items-center justify-center mt-auto">
        <p className="text-sm text-gray-700 text-center text-wrap">
          Your assigned target for this month is:{' '}
          <span className="text-blue-600 font-semibold">1000 SAR</span>,and you
          are successfuly achieved:{' '}
          <span className="text-blue-600 font-semibold">500 SAR.</span>
        </p>
      </div>
    </div>
  );
};

export default Target;
