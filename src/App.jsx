import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import KidsWear from "./components/kidsWear";
import MenWear from "./components/MenWear";
import WomenWear from "./components/WomenWear";
import DealsSection from "./components/Deals";
import Profile from "./components/Profile";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <KidsWear />
            <MenWear />
            <WomenWear />
          </>
        } />
        <Route path="/kids" element={<KidsWear />} />
        <Route path="/men" element={<MenWear />} />
        <Route path="/women" element={<WomenWear />} />
        <Route path="/deals" element={<DealsSection />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;