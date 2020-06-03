import React, { Component, Suspense } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

import "./i18n";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={null}>
          <Header resumeData={resumeData} />

          <About resumeData={resumeData} />
          <Resume resumeData={resumeData} />
          {/*<Portfolio resumeData={resumeData}/>*/}
          <Testimonials resumeData={resumeData} />
          <ContactUs resumeData={resumeData} />
          <Footer resumeData={resumeData} />
        </Suspense>
      </div>
    );
  }
}

export default App;
