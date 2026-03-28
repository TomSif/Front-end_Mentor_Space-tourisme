import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App max-h-screen">
      <Routes>
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
    </div>
  );
}

export default App;
