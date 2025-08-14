import React from "react";

export default function Search() {
  return (
    <div className="flex border border-gray-400 rounded-2xl overflow-hidden w-80 sm:w-96 mb-4">
      <input
        type="search"
        className="flex-1 px-2 py-1 outline-none"
        placeholder="Buscar..."
      />
      <button className="bg-pink-400 px-4 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-gray-600 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
