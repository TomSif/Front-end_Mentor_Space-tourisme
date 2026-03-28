import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./NavBar";

function Layout() {
  const location = useLocation();
  const isDesktop = window.innerWidth >= 768;
  const slideX = isDesktop ? 1200 : 0;
  return (
    <div className=" flex flex-col">
      <NavBar />
      <AnimatePresence mode="wait">
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
      </AnimatePresence>
    </div>
  );
}

export default Layout;
