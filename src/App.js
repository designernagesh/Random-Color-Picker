import { useState } from "react";
import './App.css'
import ResultBox from "./components/ResultBox";

function App() {
  const [bgColor, setBgColor ] = useState('rgb(220,220,220)');

  const colorHandler = () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255),
        g = randomBetween(0, 255),
        b = randomBetween(0, 255),
        rgb = `rgb(${r},${g},${b})`;
    setBgColor(rgb);
  }

  return (
    <>
      <h1>Random Color Picker</h1>
      <ResultBox bgColor={ bgColor} colorHandler={ colorHandler } />
    </>
  );
}

export default App;
