function NavLinks() {
  return (
    <nav className="md:flex-row flex-col z-30 flex pt-33 md:pt-0">
      <ul className="md:flex-row flex-col gap-8 flex text-white pl-8 md:pl-0 text-preset-8">
        <li>
          <strong className="text-preset-8-bold">00</strong> HOME
        </li>
        <li>
          <strong className="text-preset-8-bold">01</strong> DESTINATION
        </li>
        <li>
          <strong className="text-preset-8-bold">02</strong> CREW
        </li>
        <li>
          <strong className="text-preset-8-bold">03</strong> TECHNOLOGY
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
