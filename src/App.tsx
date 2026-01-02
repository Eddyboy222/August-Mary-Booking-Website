import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";
// import AboutPage from "./Pages/AboutPage";
import BookingPage from "./Pages/BookingPage";
import AdminPage from "./Pages/AdminPage";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        {/* <Route path="/about" element={<AboutPage/>} /> */}
        <Route path="/book" element={<BookingPage/>} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  )
}

export default App
