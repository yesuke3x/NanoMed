import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import Gallery from "@/pages/Gallery";
import Control from "@/pages/Control";
import Conclusions from "@/pages/Conclusions";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-nano-bg">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/catalog"     element={<Catalog />} />
            <Route path="/gallery"     element={<Gallery />} />
            <Route path="/control"     element={<Control />} />
            <Route path="/conclusions" element={<Conclusions />} />
            <Route path="*"            element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
