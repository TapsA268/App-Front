import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App/Home";
import About from "./App/About";
import WebApp from "./App/WebApp";
import MobileApp from "./App/MobileApp";

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web_apps" element={<WebApp />} />
        <Route path="/mobile_apps" element={<MobileApp />} />
      </Routes>
  );
};

export default App;
