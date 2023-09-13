import React, { Suspense, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "home/Footer";

import PdpContent from "./components/pdpContent/PdpContent";
import ErrorBoundary from "./molecules/errorBoundary";
import "./index.css";

const Header = React.lazy(() => import("home/Header"));

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const toggleHeader = useCallback(() => setShowHeader((prev) => !prev), []);
  console.log('abc');
  return (
    <Router>
      <div className="container">
        <ErrorBoundary>
          {showHeader && (
            <Suspense fallback={<div>Loading Header...</div>}>
              <Header />
            </Suspense>
          )}
        </ErrorBoundary>
        <button onClick={toggleHeader}>Toggle Header</button>
        <div>
          <Switch>
            <Route path="/product/:id" component={PdpContent} />
          </Switch>
        </div>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
