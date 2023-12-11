import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import HomeCarousal from "./HomeCarousal";
import Services from "./Services";
import Contact from "./ContactUs";
import Footer from "./footer";

function App() {
  return (
    <>
      <Navbar />
      <HomeCarousal />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
