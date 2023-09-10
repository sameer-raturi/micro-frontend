import React, { Suspense, useCallback, useState } from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";

import "./index.css";
import ErrorBoundary from "./molecules/errorBoundary";

const Header = React.lazy(() => import("home/Header"));

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const toggleHeader = useCallback(() => setShowHeader((prev) => !prev), []);

  return (
    <div className="container">
      <ErrorBoundary>
        {showHeader && (
          <Suspense>
            <Header />
          </Suspense>
        )}
      </ErrorBoundary>
      <button onClick={toggleHeader}>Toggle Header</button>
      <div>pdp page content</div>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
