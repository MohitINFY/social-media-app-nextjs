"use client";
import Link from "next/link";
import {useState} from "react";

const Mobilemenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-small ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-small ${
            isOpen ? "opacity-0" : ""
          } ase-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-small ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh - 96px)] bg-white flex flex-col items-center gap-8 justify-center">
          <Link href="/" className="text-blue-600">
            Home
          </Link>
          <Link href="/" className="text-blue-600">
            Friends
          </Link>
          <Link href="/" className="text-blue-600">
            Groups
          </Link>
          <Link href="/" className="text-blue-600">
            Stories
          </Link>
          <Link href="/" className="text-blue-600">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Mobilemenu;
