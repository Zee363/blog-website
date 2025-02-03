import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './components/Navbar.css';
import './App.css';
import HomePage from "./pages/HomePage.jsx";
import Beauty from "./pages/BeautyPage.jsx";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beauty" element={<Beauty />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
    