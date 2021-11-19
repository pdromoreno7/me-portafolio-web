import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { NavMenu } from "./components/NavMenu/NavMenu";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Pdf } from "./pages/Pdf";
import { Skycomeetpage } from "./pages/Projectspages/Skycomeetpage/Skycomeetpage";

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />

        <Switch>
          <Route exact path="/projects/skycomeet">
            <Skycomeetpage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
