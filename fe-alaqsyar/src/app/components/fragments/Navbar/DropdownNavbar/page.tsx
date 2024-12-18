"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface DropdownProps {
  buttonLabel: string;
  items: { label: string; href: string }[];
  buttonClassName?: string;
  menuClassName?: string;
}

const DropdownNavbar = ({
  buttonLabel,
  items,
  buttonClassName = "text-white rounded-md hover:bg-indigo-950 transition-all px-4 py-2",
  menuClassName = "absolute z-20 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null); // Untuk jeda waktu hover

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 200); // Tambahkan waktu tunda 200ms
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Button Dropdown */}
      <button
        onClick={toggleDropdown}
        className={`${buttonClassName} flex items-center gap-2 whitespace-nowrap`}
      >
        {buttonLabel}{" "}
        <svg
          className="w-4 h-4 text-gray-800 dark:text-white"
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
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`${menuClassName} transition-all duration-300 transform ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <ul className="py-1">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-150 cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownNavbar;
