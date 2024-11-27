import React from 'react';

const TransactionsTable = ({ handleOpenDrawer }) => {
  return (
    <div className="w-full overflow-x-auto overflow-y-auto">
      <table className="w-full text-left border-collapse">
        <thead className="text-sm font-medium bg-gray-100 font-roboto">
          <tr>
            <th className="px-6 py-2 ">Transaction Code</th>
            <th className="px-6 py-2">Date</th>
            <th className="px-6 py-2">Time</th>
            <th className="px-6 py-2">Quantity</th>
            <th className="px-6 py-2">Total Amount</th>
            <th className="px-6 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 20 }).map((_, i) => (
            <tr key={i} className="text-sm text-gray-600 border-b font-roboto">
              <td className="px-6 py-2">TXN00{i}</td>
              <td className="px-6 py-2">2026-11-15</td>
              <td className="px-6 py-2">12:65</td>
              <td className="px-6 py-2">{i + 1}</td>
              <td className="px-6 py-2">{(i + 1) * 100} SAR</td>
              <td className="px-6 py-2">
                <button
                  onClick={handleOpenDrawer}
                  className="text-blue-500 hover:underline"
                >
                  Items
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
