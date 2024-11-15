import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./component/TopBar/Topbar";
import Footer from "./component/Footer/footer";
import Crausal from "./component/Slider/slider";
import OurProduct from "./component/OurProduct/OurProduct";
import AboutSection from "./component/AboutSection/AboutSection";
import ContactLink from "./component/ContactUs/ContactLink";
import FormPage from "./component/Form/FormPage";
import Accordian from "./component/Slider/Accordian";
import Contact from "./component/ContactUs/Contact";
import Portfolio from "./component/PortFolio/Portfolio";
import WoodForm from "./component/PortFolio/WoodForm";
import Download from "./component/Download/Download";
import DownloadFormPage from "./component/Download/DownloadFormPage";
import AboutUs from "./component/AboutSection/AboutUs";
import Vision from "./component/AboutSection/Vision";
import Mission from "./component/AboutSection/Mission";
import WoodenPaneling from "./component/WoodenPaneling/WoodenPaneling";
import BrowseCatelog from "./component/WoodenPaneling/BrowseCatelog";
import DiscoverWonder from "./component/WoodenPaneling/DiscoverWonder";
import PVCPanelling from "./component/WoodenPaneling/PVCPanelling";
import WhiteAsh from "./component/WoodenPaneling/WhiteAsh";
import ProductSlide from "./component/WoodenPaneling/ProductSlide";
import Career from "./component/Career/Career";
import FlooringSlider from "./component/OurProduct/Flooring/FlooringSlider";
import FlooringHero from "./component/OurProduct/Flooring/HeroImage";
import FingerJointedSlider from "./component/OurProduct/FingerJointed/FingerJointed";
import HeroImageFingerJointed from "./component/OurProduct/FingerJointed/HeroImageFingerJointed";
import FingerDescription from "./component/OurProduct/FingerJointed/FingerDescription";
import GLTPiller from "./component/OurProduct/GLTPiller/GLTPiller";
import ScrollToTopButton from "./component/ScrollToTopButton"; 
import ElevateSection from "./component/ElevateSection/ElevateSection";

function App() {
  const base="http://localhost:8080/"
  return (
    <BrowserRouter>
    
      <Topbar  base={base}/>
      <div className="min-h-screen">
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <Crausal base={base}/>
                <OurProduct  base={base}/>
                <AboutSection  base={base}/>
                <ContactLink  base={base}/>
                <ElevateSection base={base}/>
                <FormPage  base={base}/>
                <Accordian  base={base}/>
              </>
            }
          />

          {/* Contact page route */}
          <Route
            path="/contact-us"
            element={
              <>
                <Contact base={base}/>
              </>
            }
          />

          {/* Portfolio page route */}
          <Route
            path="/portfolio"
            element={
              <>
                <Portfolio base={base}/>
                <WoodForm base={base}/>
              </>
            }
          />

          {/* Downloads page route */}
          <Route
            path="/sustainability"
            element={
              <>
                <Download base={base}/>
                <DownloadFormPage base={base}/>
              </>
            }
          />

          {/* About us page route */}
          <Route
            path="/about-us"
            element={
              <>
                <AboutUs base={base}/>
                <Vision base={base}/>
                <Mission base={base}/>
              </>
            }
          />

          {/* Wooden Paneling page route */}
          <Route
            path="/wooden-paneling"
            element={
              <>
                <WoodenPaneling base={base}/>
                <BrowseCatelog base={base}/>
                <DiscoverWonder base={base}/>
                <PVCPanelling base={base}/>
              </>
            }
          />

          {/* White Ash Wood Paneling page route */}
          <Route
            path="/wooden-paneling/white-ash-wood-panelling"
            element={
              <>
                <WhiteAsh base={base}/>
                <ProductSlide base={base}/>
              </>
            }
          />
          {/*  Flooring page route */}
          <Route
            path="/flooring"
            element={
              <>
                <FlooringHero base={base}/>
                <FlooringSlider base={base}/>
              </>
            }
          />
          {/*  Finger Jointed Board page route */}
          <Route
            path="/finger-jointed-board"
            element={
              <>
                <HeroImageFingerJointed base={base}/>
                <FingerJointedSlider base={base}/>
                <FingerDescription base={base}/>
              </>
            }
          />
          <Route
            path="/pine-timber"
            element={ 
              <>
                <HeroImageFingerJointed base={base}/>
                <FingerJointedSlider base={base}/>
                <FingerDescription base={base}/>
              </>
            }
          />
          
            <Route
            path="/glt-beams-and-pillars"
            element={
              <>
               <HeroImageFingerJointed  base={base}/>
                <GLTPiller base={base}/>
              </>
            }
          />
         
          <Route
            path="careers"
            element={
              <>
                <Career base={base}/>
              </>
            }
          />
        </Routes>
      </div>

      <Footer base={base}/>
      <ScrollToTopButton base={base}/> 
    </BrowserRouter>
  );
}

export default App;
