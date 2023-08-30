import React from "react";

import { AboutUs } from "./container";

import { Chef } from "./container";
import { FindUs } from "./container";
import { Gallery } from "./container";
import { Header } from "./container";
import { Intro } from "./container";
import { Laurels } from "./container";
import MojaKomponenta from "./container/Banner";
import "./App.css";

const App = () => (
  <div>
    <MojaKomponenta />
    <AboutUs />
    <Intro />
    <Chef />
    <FindUs />
    <Gallery />
    <Header />
    <Laurels />
  </div>
);

export default App;
