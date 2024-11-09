import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Vr from "../components/Vr";
import Purple from "../components/Purple";
import HappensBlog from "../components/HappensBlog";
import Footer from "../components/Footer";

const Home = () => {
  return (
      <div>
          <section className="section header" id="header">
              <Header/>
          </section>
          <section className="section hero_section" id="hero">
              <Hero/>
          </section>
          <section className="section brands_section" id="brands">
              <Brands/>
          </section>
          <section className="section what_is_chatgpt_section" id="what-is">
              <WhatIsChatGpt/>
          </section>
          <section className="section future_here" id="future">
              <FutureHere/>
          </section>
          <section className="section vr" id="vr">
              <Vr/>
          </section>
          <section className="section purple" id="purple">
              <Purple/>
          </section>
          <section className="section happens_blog" id="happens">
              <HappensBlog/>
          </section>
          <section className="section footer" id="footer">
              <Footer/>
          </section>
      </div>
  );
};

export default Home;
