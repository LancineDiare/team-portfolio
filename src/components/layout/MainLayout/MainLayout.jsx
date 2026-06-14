import { Routes, Route } from "react-router-dom";

import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import DebugPanel from "../../common/DebugPanel/DebugPanel";

import Home from "../../../pages/Home/Home";
import AboutUs from "../../../pages/AboutUs/AboutUs";
import Members from "../../../pages/Members/Members";
import CommonProjects from "../../../pages/CommonProjects/CommonProjects";
import IndividualProjects from "../../../pages/IndividualProjects/IndividualProjects";
import Contact from "../../../pages/Contact/Contact";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/common-projects" element={<CommonProjects />} />
          <Route path="/individual-projects" element={<IndividualProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <DebugPanel />
      <Footer />
    </>
  );
}

export default MainLayout;