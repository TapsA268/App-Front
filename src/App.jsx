import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App/Home";
import About from "./App/About";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
};

export default App;
