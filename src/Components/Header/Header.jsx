import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between py-5 items-center">
      <h2 className="text-3xl sm:text-4xl font-bold">Knowledge Cafe</h2>
      <div>
        <img
          className="w-12 h-12 sm:w-[60px] sm:h-[60px]"
          src="./images/boy1.png"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Header;
