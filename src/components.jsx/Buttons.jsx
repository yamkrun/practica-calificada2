import React from "react";

export default function Buttons({ categoryName, setCategory }) {
  return (
    <div>
      <button
        className="bg-pink-400 rounded-2xl py-1 px-2.5 font-bold text-gray-700 w-[100px]"
        onClick={(e) => setCategory(categoryName)}
      >
        <p>{categoryName}</p>
      </button>
    </div>
  );
}
