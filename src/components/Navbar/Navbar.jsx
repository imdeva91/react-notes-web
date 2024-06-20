import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-5 w-[80%] flex items-center justify-around m-auto mt-10">
        <div className="w-[200px]">
          <img
            className="w-[100px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6cedo1mkf6zjpkJ8oZ_GAUW4m-7wtVr_QjA&s"
            alt=""
            
          />
        </div>
        <ul className="flex items-center gap-10 text-xl font-semibold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Help</li>
        </ul>

        <div>
          <button className="bg-green-500 text-white px-4 py-3 rounded-md border-none">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
