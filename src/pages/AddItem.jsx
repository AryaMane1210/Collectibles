
import React, { useState,useContext} from "react";
import { useNavigate } from "react-router-dom";

const AddItem = ({items, setItems}) => {
   
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [extraImages, setExtraImages] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleExtraImageChange = (e, index) => {
  const newFiles = [...extraImages];
  newFiles[index] = e.target.files[0];
  setExtraImages(newFiles);
};


  const handleSubmit = (e) => {
    e.preventDefault();

 const newItem = {
      id: items.length + 1,
      name,
      type,
      description: desc,
      imageUrl: URL.createObjectURL(coverImage),
      extraImages: extraImages.map((file) => URL.createObjectURL(file)),
    };

    setItems((prev) => [...prev, newItem]);

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Item Name</label>
          <input
            type="text"
            placeholder="Enter item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Item Type</label>
          <input
            type="text"
            placeholder="e.g. Shirt, Shoes"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            placeholder="Write item description..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Additional Images</label>
           {extraImages.map((file, idx) => (
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleExtraImageChange(e, idx)}
            className="w-full"
          />
           ))}
           <button
                type="button"
                className="text-blue-600 hover:underline mt-2"
                onClick={() => setExtraImages([...extraImages, null])}
            >
                + Add another image
            </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add Item
        </button>
      </form>

      {success && (
        <div className="mt-4 p-3 text-green-700 bg-green-100 rounded text-center">
          Item successfully added!
        </div>
      )}
    </div>
  );
};

export default AddItem;
