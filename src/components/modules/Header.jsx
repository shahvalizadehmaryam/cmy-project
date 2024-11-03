import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { AiOutlineShopping } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";

const Header =() => {
  return (
    <div className="w-full">
      <header className="w-full p-4 bg-gray flexRowJustify">
        
        <div className="flexRowStyle space-x-20">
          {/* navbar */}
          <nav className="hidden lg:block space-x-4">
            <ul className="flexRowStyle space-x-4">
              <li>Home</li>
              <li>Blog</li>
              <li>Store</li>
            </ul>
          </nav>
          {/* searchbar */}
          <div className="relative">
            <RiSearchLine className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="inputStyle w-96 p-2 pl-10"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flexRowStyle space-x-8">
          {/* icons part */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <AiOutlineShopping className="text-xl text-gray-300 hover:cursor-pointer" />
            <TbUsers className="text-xl text-gray-300 hover:cursor-pointer" />
            <FaRegEnvelope className="text-xl text-gray-300 hover:cursor-pointer" />
            <IoMdNotificationsOutline className="text-2xl text-gray-300 hover:cursor-pointer" />
          </div>
          {/* profile image */}
          <div className="w-10 h-10 rounded-full bg-gray-600">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </header>
      {/* icons part */}
      <div className="w-full bg-gray flex items-center justify-between space-x-4 md:hidden">
        <AiOutlineShopping className="text-xl text-gray-300 hover:cursor-pointer" />
        <TbUsers className="text-xl text-gray-300 hover:cursor-pointer" />
        <FaRegEnvelope className="text-xl text-gray-300 hover:cursor-pointer" />
        <IoMdNotificationsOutline className="text-2xl text-gray-300 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
