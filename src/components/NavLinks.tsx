import { NavLink } from "react-router";

const navLinks = [
  { to: "/", strong: "00", label: "HOME" },
  { to: "/destination", strong: "01", label: "DESTINATION" },
  { to: "/crew", strong: "02", label: "CREW" },
  { to: "/technology", strong: "03", label: "TECHNOLOGY" },
];

interface NavLinksProps {
  onCloseModal?: () => void;
}

function NavLinks({ onCloseModal }: NavLinksProps) {
  return (
    <nav className="md:flex-row items-center flex-col z-30 flex pt-33 md:pt-0 md:backdrop-blur-2xl md:bg-white/5 md:h-24 lg:pl-30 lg:pr-16 w-full md:pr-10">
      <ul className="md:flex-row flex-col gap-8 md:gap-12 flex text-white pl-8 md:pl-30 text-preset-8 w-full ">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              onClick={() => onCloseModal?.()}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `flex w-full md:w-auto items-center border-r-2 md:border-b-2 md:border-r-0 border-transparent hover:border-white/50 md:h-24 ${isActive ? "border-white" : ""}`
              }
            >
              <strong className="text-preset-8-bold pr-3">{link.strong}</strong>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
