import { useRef, useEffect } from "react";
import Fluid from "webgl-fluid";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/header";
import HeroSection from "./Components/HeroSection/HeroSection";
import MiddleSection from "./Components/MiddleSection/MiddleSection";

const settings = {
  SIM_RESOLUTION: 128, // Resolution of the simulation grid
  DYE_RESOLUTION: 512, // Resolution of the dye grid
  CAPTURE_RESOLUTION: 512, // Resolution of captured frames
  DENSITY_DISSIPATION: 2, // Rate at which density dissipates
  VELOCITY_DISSIPATION: 0.99, // Rate at which velocity dissipates
  PRESSURE: 0.8, // Pressure value used in the simulation
  PRESSURE_ITERATIONS: 20, // Number of pressure iterations
  CURL: 30, // Curl value used in the simulation
  INITIAL: true, // Enables splats on initial load
  SPLAT_AMOUNT: 5, // Number of initial splats (Random number between n and n * 5)
  SPLAT_RADIUS: 0.17, // Radius of the splats
  SPLAT_FORCE: 6000, // Force applied by the splats
  SPLAT_KEY: "Space", // Keyboard key to spawn new splats (empty to disable)
  SHADING: true, // Enables shading in the visualization
  COLORFUL: true, // Enables rapid changing of colors
  COLOR_UPDATE_SPEED: 30, // Speed of color update
  COLOR_PALETTE: [], // Custom color palette (empty by default, uses hex colors)
  HOVER: true, // Enables interaction on hover
  BACK_COLOR: "#000000", // Background color of the canvas
  TRANSPARENT: false, // Makes the canvas transparent if true
  BRIGHTNESS: 0.5, // Color brightness (Recommend lower than 1.0 if BLOOM is true)
  BLOOM: true, // Enables bloom effect
  BLOOM_ITERATIONS: 8, // Number of bloom effect iterations
  BLOOM_RESOLUTION: 256, // Resolution of the bloom effect
  BLOOM_INTENSITY: 0.8, // Intensity of the bloom effect
  BLOOM_THRESHOLD: 0.6, // Threshold for the bloom effect
  BLOOM_SOFT_KNEE: 0.7, // Soft knee value for the bloom effect
  SUNRAYS: true, // Enables sunrays effect
  SUNRAYS_RESOLUTION: 196, // Resolution of the sunrays effect
  SUNRAYS_WEIGHT: 1.0, // Weight of the sunrays effect
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
