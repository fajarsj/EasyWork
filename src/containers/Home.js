import React, { Fragment } from "react";

import Header from "../components/Sections/Header";
import About from "../components/Sections/About";
import Testimony from "../components/Sections/Testimony";
import Peoples from "../components/Sections/Peoples";
import Partner from "../components/Sections/Partner";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Footer";

import { testimonyData, peoplesData } from "./_mock_";

const Home = () => (
  <Fragment>
    <Header />
    <About />
    <Testimony data={testimonyData} />
    <Peoples data={peoplesData} />
    <Partner />
    <Contact />
    <Footer />
  </Fragment>
);

export default Home;
