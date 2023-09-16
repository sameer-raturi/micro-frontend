import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";

import Header from "./components/header";
import Footer from "./components/footer";

import "./index.css";
import HomeContent from "./components/home";
import MainLayout from "./pages/MainLayout";

ReactDOM.render(<MainLayout />, document.getElementById("app"));
