import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';

import Homepage from "./pages/Homepage";
import Players from "./pages/Players";
import Transfers from "./pages/Transfers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PlayerRepresentation from "./pages/Secondary/PlayerRepresentation";
import HealthCare from "./pages/Secondary/HealthCare";
import LegalServices from "./pages/Secondary/LegalServices";
import FinancialManagement from "./pages/Secondary/FinancialManagement";
import MarketingBrand from "./pages/Secondary/MarketingBrand";
import YouthRepre from "./pages/Secondary/YouthRepre";
import ScrollToTop from "./components/scrollToTop";
import Services from "./pages/Services";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigácia */}
        <Navbar />

        {/* Obsah stránky */}
        <main className="flex-grow">
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/players" element={<Players/>}/>
            <Route path="/transfers" element={<Transfers/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/services/player-representation" element={<PlayerRepresentation/>}/>
            <Route path="/services/healthcare-and-well-being" element={<HealthCare/>}/>
            <Route path="/services/legal-services-for-players" element={<LegalServices/>}/>
            <Route path="/services/financial-management" element={<FinancialManagement/>}/>
            <Route path="/services/marketing-and-brand-development" element={<MarketingBrand/>}/>
            <Route path="/services/youth-football-representation" element={<YouthRepre/>}/>
          </Routes>
        </main>

        {/* Footer */}
        <Footer backgroundImage="/images/footer_bg.png"/>
      </div>
    </Router>
  )
}

export default App