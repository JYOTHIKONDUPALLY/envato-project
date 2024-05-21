import { useRef, useEffect } from "react";
import Fluid from "webgl-fluid";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/header";
import HeroSection from "./Components/HeroSection/HeroSection";
import MiddleSection from "./Components/MiddleSection/MiddleSection";

const settings = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 512,
  DENSITY_DISSIPATION: 2,
  VELOCITY_DISSIPATION: 0.99,
  PRESSURE_DISSIPATION: 0.8,
  CURL: 30,
  BACKGROUND_COLOR: "#251d35",
  SPLAT_RADIUS: 0.1,
  SPLAT_FORCE: 6000,
  SHADING: true,
  COLORFUL: true,
  PAUSED: false,
  RANDAM_SPLIATS: true,
  BACK_COLOR: { r: 0, g: 0, b: 0 },
  TRANSPARENT: false,
  BLOOM: true,
  BLOOM_ITERATIONS: 8,
  BLOOM_RESOLUTION: 256,
  BLOOM_INTENSITY: 0.8,
  BLOOM_THRESHOLD: 1,
  BLOOM_SOFT_KNEE: 0.7,
  SUNRAYS_WEIGHT: 1.0,
};
export default function App() {
  const canvas = useRef(null);
  useEffect(function () {
    let c = canvas.current;
    Fluid(c, settings);
  }, []);
  return (
    <div className="App">
      <canvas ref={canvas} style={{ width: "100%", height: "100%" }}></canvas>
      <Header />
      <HeroSection />
      <MiddleSection />
      <Footer />
    </div>
  );
}
