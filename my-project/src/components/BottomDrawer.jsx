import React from 'react';

const BottomDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 md:hidden"
          onClick={onClose} // Close drawer when clicking outside
        >
          <div
            className="w-full bg-white h-80 rounded-t-md drop-shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the drawer
          >
            <div className="p-4">
              <h1 className="text-lg font-semibold">Items List</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
              <button
                className="mt-4 text-blue-500 hover:underline"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomDrawer;
