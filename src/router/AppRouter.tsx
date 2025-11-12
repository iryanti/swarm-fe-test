import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/NavBar";
import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Footer from "../components/Footer";
import Rankings from "../pages/Rankings";
import Wallet from "../pages/Wallet";

export default function AppRouter() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary text-white">
        <Header />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}