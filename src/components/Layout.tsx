import { Outlet } from "react-router";
import { motion } from "framer-motion";

function Layout() {
  const isDesktop = window.innerWidth >= 768;
  const slideX = isDesktop ? 1200 : 0;
  return (
    <div className=" flex flex-col">
      <motion.div
        key={location.pathname}
        initial={{ x: slideX, opacity: isDesktop ? 1 : 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        exit={{
          x: -slideX,
          opacity: isDesktop ? 1 : 0,
          transition: { duration: 0.3, ease: "easeIn" },
        }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
}

export default Layout;
