import React from 'react';
import avater from '../assets/profile.webp';
import { CiLocationOn } from 'react-icons/ci';
import { IoMenuOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-full font-roboto">
      <h1 className="hidden lg:block font-semibold text-[1rem] text-gray-700">
        Salesperson Dashboard
      </h1>
      <button className="px-2 py-2 bg-gray-100 rounded-md lg:hidden">
        <IoMenuOutline size={24} />
      </button>

      <div className="flex items-center h-full px-2 w-fit">
        <div className="flex-col items-center justify-center hidden h-full px-4 md:flex w-fit ">
          <p className="font-medium text-gray-800 text-[0.85rem] mt-1">
            Alice Peterson
          </p>
          <p className=" text-gray-600 text-[0.75rem] flex items-center gap-1 ">
            <CiLocationOn size={14} /> SACO Al-takasusi
          </p>
        </div>
        <span className="w-[3.2rem] h-[3.2rem] rounded-full ">
          <img
            src={avater}
            alt="avatar"
            className="object-cover w-full h-full rounded-full"
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
