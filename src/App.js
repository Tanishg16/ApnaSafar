import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Middletittle from "./components/middletittle";
import ServiceSection from "./components/servicesection";
import CabCard from "./components/cabcard";
import Carclass from "./components/carclass";
import WhyUsSection from "./components/whyussection";
import Footer from "./components/footer";
import ContactButtons from "./components/contactbuttons";
import TrustSection from "./components/TrustSection"

function App() {
  return (
    <div>
      {/* <Header />
      <Middletittle />
      <ServiceSection />
      <CabCard />
      <Carclass />
      <WhyUsSection />
      <Footer />
      <ContactButtons /> */}
      <Header />

      <section id="home">
        <Middletittle />
      </section>

      <section id="services">
        <ServiceSection />
      </section>

      <section id="fleet">
        <CabCard />
        </section>
        <section id="TrustSection"> 
          <TrustSection/>
        </section>
        <section id="fleet">
        <Carclass />
      </section>

      <section id="about">
        <WhyUsSection />
      </section>

      <section id="contact">
        <Footer />
      </section>

      <ContactButtons />
    </div>
  );
}

export default App;
