import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/Not-Found/NotFound";
import MovieInfo from "./components/Movie-Info/MovieInfo";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="full-container">
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/movie" element={<MovieInfo />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
