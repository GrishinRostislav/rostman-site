import React from "react";

function DiscountButton({ onClick }) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <button
        onClick={onClick}
        className="whitespace-nowrap bg-white bg-opacity-80 backdrop-blur-md shadow-md px-6 py-3 rounded-xl font-sans transition"
      >
        Claim Your 10% Discount
      </button>
    </div>
  );
}

export default DiscountButton;
