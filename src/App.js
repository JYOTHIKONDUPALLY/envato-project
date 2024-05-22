import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/header";
import HeroSection from "./Components/HeroSection/HeroSection";
import MiddleSection from "./Components/MiddleSection/MiddleSection";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MiddleSection />
      <Footer />
    </div>
  );
}
