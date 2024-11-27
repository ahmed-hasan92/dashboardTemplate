import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import TransactionsTable from './TransactionsTable';

const Transactions = ({ handleOpenDrawer }) => {
  return (
    <div className="flex flex-col w-full h-full px-4 py-4 font-roboto">
      <div className="flex items-center justify-between w-full h-fit">
        <div className="flex items-center w-full gap-2 h-fit">
          <div className="relative w-6 h-6 mt-2">
            <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
          <h1 className="text-sm font-semibold text-blue-600">Transactions</h1>
        </div>
        <div className="flex items-center px-2 py-2 text-gray-700 border border-gray-300 rounded-md shadow-md w-fit h-fit shadow-gray-300">
          <IoCalendarOutline size={18} />
        </div>
      </div>
      <div className="flex flex-1 pt-4 overflow-auto ">
        <TransactionsTable handleOpenDrawer={handleOpenDrawer} />
      </div>
    </div>
  );
};

export default Transactions;
