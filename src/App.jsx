import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Tech from "./components/Tech/Tech";

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar name="Sujataa" />

      {/* hero section */}
      <Hero title="sujataa" />

      {/* about section */}
      <About pageTitle="about me" />

      {/* gallery section */}
      <Gallery pageTitle="my gallery" />

      {/* tech section */}
      <Tech pageTitle="tech stuff" />

      {/* footer section */}
      <Footer copyRight="sujataa 2024 ;)" />
    </>
  );
}

export default App;
