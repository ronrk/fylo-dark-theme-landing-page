import React from "react";

import {
  Header,
  Hero,
  Features,
  MainSection,
  Testimonials,
  GetEarlySection,
  Footer,
} from "./Components";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Features />
      <MainSection />
      <Testimonials />
      <GetEarlySection />
      <Footer />
    </div>
  );
};

export default App;
