// App.jsx

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ScrollToTop />
          <MainLayout />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;