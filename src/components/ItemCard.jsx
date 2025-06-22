import React from "react";

const ItemCard=({item, onClick})=>{
return(
    <div onClick={()=>onClick(item)}
    className = "cursor-pointer w-60 h-72 bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col">
    <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
        <div className="flex-grow flex items-center justify-center px-3 py-2">
      <h3 className="text-md font-medium text-gray-800 text-center">{item.name}</h3>
    </div>
    </div>
);
};

export default ItemCard;