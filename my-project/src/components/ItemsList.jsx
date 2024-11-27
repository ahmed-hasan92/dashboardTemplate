import React from 'react';

const ItemsList = () => {
  // Example items array
  const items = [
    {
      itemName: 'Table',
      articleCode: '54686',
      itemPrice: '18 SAR',
      itemImageUrl:
        'https://habitt.com/cdn/shop/files/2_2_51e1b37c-8035-4abd-8e93-331f145525f5.jpg?v=1697278017',
    },
    {
      itemName: 'Chair',
      articleCode: '54606',
      itemPrice: '20 SAR',
      itemImageUrl:
        'https://www.foundations.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/o/foundations-little-scholars-kids-school-chairs-12-in-seat-height_main_1.jpg',
    },
    {
      itemName: 'Lamp',
      articleCode: '12345',
      itemPrice: '45 SAR',
      itemImageUrl: 'https://m.media-amazon.com/images/I/61xxhaeUKIL.jpg',
    },
    {
      itemName: 'Sofa',
      articleCode: '67890',
      itemPrice: '150 SAR',
      itemImageUrl:
        'https://www.ikea.com/sa/en/images/products/paerup-3-seat-sofa-gunnared-dark-grey__1041905_pe841185_s5.jpg?f=s',
    },
    {
      itemName: 'Desk',
      articleCode: '11223',
      itemPrice: '85 SAR',
      itemImageUrl:
        'https://www.ikea.com/sa/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-4 py-4 overflow-y-auto space-y-4 font-roboto">
      <div className="w-full h-fit flex items-center gap-2">
        <div className="relative w-6 h-6 mt-2">
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
        <h1 className="text-sm font-semibold text-blue-600">Items list</h1>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <img
              src={item.itemImageUrl}
              alt={item.itemName}
              className="w-12 h-12 rounded-lg"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-sm font-semibold text-gray-800">
                {item.itemName}
              </h3>
              <p className="text-sm text-gray-600">
                Article: {item.articleCode}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700">
                {item.itemPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
