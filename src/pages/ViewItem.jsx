import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import ItemCard from '../components/ItemCard.jsx';
import ItemModal from '../components/ItemModal.jsx';

const ViewItems =({items})=>{
    const navigate = useNavigate();
    
    const [selectedItems, setSelectedItem] = useState(null);

// const dummyItems = [
//   {
//     id: 1,
//     name: "Vintage Camera",
//     type: "Electronics",
//     description: "A classic 1970s film camera in mint condition.",
//     imageUrl: "/Camera.jpeg", // make sure this exists in your public folder
//     extraImages: ["/coffee1.jpeg", "/coffee2.jpg"]
//   },
//   {
//     id: 2,
//     name: "Antique Vase",
//     type: "Decor",
//     description: "Hand-painted porcelain vase from the Qing Dynasty.",
//     imageUrl: "/vase.jpeg",
//     extraImages: ["/images/vase1.jpg", "/images/vase2.jpg"]
//   },
//   {
//     id: 3,
//     name: "Retro Lamp",
//     type: "Lighting",
//     description: "Functional and stylish lamp from the 80s.",
//     imageUrl: "/lamp.jpeg",
//     extraImages: ["/images/lamp1.jpg", "/images/lamp2.jpg"]
//   },
//   {
//     id: 4,
//     name: "Coffee",
//     type: "Lighting",
//     description: "Functional and stylish lamp from the 80s.",
//     imageUrl: "/coffee.jpeg",
//     extraImages: ["/images/lamp1.jpg", "/images/lamp2.jpg"]
//   },
//   {
//     id: 5,
//     name: "coins",
//     type: "Lighting",
//     description: "Functional and stylish lamp from the 80s.",
//     imageUrl: "/coins.jpeg",
//     extraImages: ["/images/lamp1.jpg", "/images/lamp2.jpg"]
//   }

// ];
// const [items, setItems] = useState(dummyItems);


return(
    <div>
      <div className="p-6">
        <div className="flex justify-between items-center p-2">
          <p className="text-xl font-semibold">View Items</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={()=>navigate('/add')}>+ Add Item</button>
        </div>

        <ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {items.map((item)=>(
                    <li key={item.id} >
                        <ItemCard className="h-[300px]" item={item} onClick={()=>setSelectedItem(item)} />
                    </li>
                ))
            }
            </div>
        
        </ul>
        
</div>
{selectedItems && (
  <ItemModal selectedItem={selectedItems} closeModal={() => setSelectedItem(null)} />
)}
    </div>
)
}
export default ViewItems;