import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";
import NavBar from "../src/components/NavBar";

function App() {
  const location = useLocation();

  return (
    <div className="App max-h-screen bg-blue-900 overflow-hidden">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            {/* Page Home */}
            <Route path="/" element={<Home />} />
            {/* Page Destination */}
            <Route path="/destination" element={<Destination />} />
            {/* Page Crew */}
            <Route path="/crew" element={<Crew />} />
            {/* Page Technology */}
            <Route path="/technology" element={<Technology />} />
            {/* Route 404 (optionnel) */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
