import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {Carousel} from  'react-responsive-carousel';

const ItemModal=({selectedItem,closeModal})=>{
  const handleEnquire=async() =>{
    await fetch("http://localhost:5000/enquire", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemName: selectedItem.name }),
  });
  alert("Enquiry email sent!");
}
    if( !selectedItem) return null;
    return(
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm  flex items-center justify-center p-4">
          <div className="bg-gray-100 rounded-lg shadow-lg  max-w-3xl w-[90%] flex ">
              <div className="w-1/2 flex items-center justify-center p-4">
                <img src={selectedItem.imageUrl}
                alt={selectedItem.name}
                className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain rounded-lg" />
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <button onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-xl font-bold">
                    &times;
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{selectedItem.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedItem.description} </p>
                  <p className="text-sm text-gray-500 italic">Type: {selectedItem.type}</p>
                
                <div className=" mt-6">
                <Carousel 
                      showThumbs={false} 
                      infiniteLoop 
                      swipeable
                      showStatus={false}
                      autoPlay
                      interval={3000}
                      className="rounded-lg"
                    >
                      {selectedItem.extraImages.map((src, idx) => (
                        <div key={idx}
                         className="w-full flex items-center justify-center ">
                           <div className="w-40 h-40 bg-white rounded overflow-hidden flex items-center justify-center">
                          <img
                            src={src}
                            alt={`extra-image-${idx}`}
                            className="object-contain h-48 w-10 rounded-lg"
                          />
                          </div>
                        </div>
                      
                      ))}
                    </Carousel>
                </div>
                </div>
             <div className="flex justify-end">
                <button onClick={handleEnquire} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  Enquire
                </button>
              </div>
              </div>
          </div>
        </div>
    );
};

export default ItemModal;