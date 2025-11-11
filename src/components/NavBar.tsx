import React, { useState } from "react";
import Button from "./elements/Button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white py-[20px] px-[50px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg"
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="text-2xl hidden md:block">NFT Marketplace</h1>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#"
                className="hover:text-blue-200 transition font-semibold"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-200 transition font-semibold"
              >
                Rankings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-200 transition font-semibold"
              >
                Connect a wallet
              </a>
            </li>
            <li>
              <Button
                text="Sign Up"
                iconSrc="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/user@2x.svg"
                width="155px"
                height="60px"
              />
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="block hover:text-blue-200 transition py-2">
                Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-200 transition py-2">
                Rankings
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-200 transition py-2">
                Connect a wallet
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
