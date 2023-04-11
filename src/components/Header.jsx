import React from "react";

export default function Header() {
  return (
    <header className="px-24 py-12 flex justify-between items-center bg-red-600">
      <img src="" alt="LOGO" />
      <div>
        <input type="text" placeholder="search..." />
        <button>
          <i className="bx bx-search-alt-2"></i>
        </button>
      </div>
    </header>
  );
}
