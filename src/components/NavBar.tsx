import { useState } from "react";
import { Link } from "react-router";
import NavLinks from "./NavLinks";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className=" fixed top-0 left-0 flex items-center justify-between w-full  max-w-screen z-10 p-6  md:p-0 md:pl-10 lg:pt-10">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-blue-900 focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      {isOpen ? (
        <div className=" fixed top-0 right-0 h-full w-64 backdrop-blur-2xl bg-black/15 flex  z-30 pl-8 md:hidden">
          <NavLinks
            onCloseModal={() => {
              setIsOpen(false);
            }}
          />
        </div>
      ) : (
        ""
      )}
      <div className="flex items-center justify-center z-30 ">
        <Link
          to="/"
          aria-label="Go to home page"
          className="flex items-center gap-3 group"
        >
          <img src="/assets/shared/logo.svg" alt="" />
        </Link>
      </div>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close the menu" : "Open the menu"}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex items-center justify-between md:hidden z-30"
      >
        {isOpen ? (
          <img src="/assets/shared/icon-close.svg" alt="" />
        ) : (
          <img src="/assets/shared/icon-hamburger.svg" alt="" />
        )}
      </button>
      <div className="md:flex hidden relative " id="mobile-menu">
        <div
          role="presentation"
          aria-hidden="true"
          className="hidden xl:flex h-0.5 bg-white/20 top-1/2 left-0 max-w-[37vw] w-[37vw] transform -transalte-y-1/2 -translate-x-[35vw] z-80 absolute opacity-70 blur-0.65"
        ></div>

        <NavLinks />
      </div>
    </header>
  );
}

export default NavBar;
