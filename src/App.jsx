import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import About from "./App/About.";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
};

export default App;
