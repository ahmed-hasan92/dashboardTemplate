import React, { useState } from 'react';
import Target from './Target';
import Transactions from './Transactions';
import ItemsList from './ItemsList';
import BottomDrawer from './BottomDrawer';

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className="flex flex-col w-full h-full px-2 py-8 md:px-4 2xl:px-16 ">
      <div className="grid w-full grid-cols-6 gap-6 h-fit ">
        <div className="bg-white h-[400px] col-span-6  lg:col-span-3 xl:col-span-3 2xl:col-span-2 rounded-md border border-gray-200 drop-shadow-xl">
          <Target />
        </div>
        <div className="bg-white h-[400px] col-span-6 lg:col-span-3 xl:col-span-3 2xl:col-span-4 rounded-md border border-gray-200 drop-shadow-xl">
          <Transactions handleOpenDrawer={handleOpenDrawer} />
        </div>
        <div className="bg-white h-[400px] col-span-6 rounded-md border border-gray-200 drop-shadow-xl hidden md:block  ">
          <ItemsList />
        </div>
      </div>
      <BottomDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
    </div>
  );
};

export default Dashboard;
