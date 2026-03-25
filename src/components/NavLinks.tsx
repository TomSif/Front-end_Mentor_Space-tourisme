import { NavLink } from "react-router";

const navLinks = [
  { to: "/", strong: 0, label: "HOME" },
  { to: "/destination", strong: 1, label: "DESTINATION" },
  { to: "/crew", strong: 2, label: "CREW" },
  { to: "/technology", strong: 3, label: "TECHNOLOGY" },
];

interface NavLinksProps {
  onCloseModal?: () => void;
}

function NavLinks({ onCloseModal }: NavLinksProps) {
  return (
    <nav className="md:flex-row items-center flex-col z-30 flex pt-33 md:pt-0 md:backdrop-blur-md md:bg-white/10 md:h-24 lg:pl-30 lg:pr-16 w-full md:pr-10">
      <ul className="md:flex-row flex-col gap-8 md:gap-12 flex text-white pl-8 md:pl-30 text-preset-8 w-full ">
        {navLinks.map((link) => (
          <NavLink
            onClick={() => onCloseModal?.()}
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `flex w-full md:w-auto items-center border-r-2 md:border-b-2 md:border-r-0 border-transparent hover:border-white/50 md:h-24 ${isActive ? "border-white" : ""}`
            }
          >
            <li>
              <strong className="text-preset-8-bold">{link.strong}</strong>{" "}
              {link.label}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
