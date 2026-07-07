// App.jsx

import { BrowserRouter } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <MainLayout />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;