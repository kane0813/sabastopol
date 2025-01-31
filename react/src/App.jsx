import { Navbar } from "./components/navbar"
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Model } from "./components/SebastopolCannon";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const App = () => {
  const [scale, setScale] = useState([1, 1, 1]);
  const rotationSpeed = 0.007;

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navbar />
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={3} />
        <pointLight position={[10, 10, 10]} />
        <Model url="../public/stone texturev6.glb" scale={scale} rotationSpeed={rotationSpeed} />
      </Canvas>

      {/* Controls for scaling */}
      <div className="absolute bottom-4 right-4 flex text-white font-['poppins'] justify-center items-center">
        <label>
          -
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={scale[0]}
            className="mx-2"
            // This is to be able to dynamically update the scales value
            onChange={(e) => {
              const newScale = parseFloat(e.target.value);
              setScale([newScale, newScale, newScale]);
            }}
          />
          +
        </label>
      </div>
    </div>
  );
}

export default App