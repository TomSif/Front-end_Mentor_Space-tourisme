import { useState } from "react";
import NavLinks from "./NavLinks";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className=" fixed top-0 left-0 flex items-center justify-between w-full p-6  z-10 bg-">
      {isOpen ? (
        <div className=" fixed top-0 right-0 h-full w-64 backdrop-blur-md bg-black/40 flex  z-20 pl-8 md:hidden">
          <NavLinks />
        </div>
      ) : (
        ""
      )}
      <div className="flex items-center justify-center">
        <img src="/assets/shared/logo.svg" alt="" />
      </div>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex items-center justify-between md:hidden z-30"
      >
        {isOpen ? (
          <img src="/assets/shared/icon-close.svg" alt="open menu button" />
        ) : (
          <img
            src="/assets/shared/icon-hamburger.svg"
            alt="close menu button"
          />
        )}
      </button>
      <div className="md:flex hidden">
        <NavLinks />
      </div>
    </header>
  );
}

export default NavBar;
