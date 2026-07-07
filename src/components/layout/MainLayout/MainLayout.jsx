/**
 * Main Layout
 *
 * Application layout containing:
 * - Navbar
 * - Lazy-loaded routes
 * - Footer
 * - Debug Panel
 */

import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import DebugPanel from "../../common/DebugPanel/DebugPanel";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";


/**
 * Lazy-loaded pages
 *
 * Pages are loaded only when visited.
 * This improves initial loading performance.
 */
const Home = lazy(() => import("../../../pages/Home/Home"));
const AboutUs = lazy(() => import("../../../pages/AboutUs/AboutUs"));
const Members = lazy(() => import("../../../pages/Members/Members"));
const CommonProjects = lazy(() =>
  import("../../../pages/CommonProjects/CommonProjects")
);
const IndividualProjects = lazy(() =>
  import("../../../pages/IndividualProjects/IndividualProjects")
);
const Contact = lazy(() => import("../../../pages/Contact/Contact"));
const MemberProfile = lazy(() =>
  import("../../../pages/MemberProfile/MemberProfile")
);
const ProjectDetails = lazy(() =>
  import("../../../pages/ProjectDetails/ProjectDetails")
);

const NotFound = lazy(() =>
    import("../../../pages/NotFound/NotFound")
);

function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="fade-in">
        <Suspense fallback={<LoadingSpinner text="Loading page..." />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/members" element={<Members />} />
            <Route path="/common-projects" element={<CommonProjects />} />
            <Route path="/individual-projects" element={<IndividualProjects />} />
            <Route path="/contact" element={<Contact />} />

            {/* Dynamic Member Pages */}
            <Route path="/members/:memberId" element={<MemberProfile />} />

            {/* Dynamic Project Pages */}
            <Route path="/projects/:projectId" element={<ProjectDetails />} />

            <Route path="*"element={<NotFound />}/>

          </Routes>
        </Suspense>
      </main>

      <DebugPanel />
      <Footer />
    </>
  );
}

export default MainLayout;