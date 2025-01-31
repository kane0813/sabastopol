import { Navbar } from "../components/navbar"
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Model } from "../components/SebastopolCannon";
import { OrbitControls } from "@react-three/drei";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const HomePage = () => {
    const [scale, setScale] = useState([1, 1, 1]);
    const rotationSpeed = 0.03;

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <ambientLight intensity={1} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={3}
                    castShadow
                />
                <pointLight position={[10, 10, 10]} intensity={0.5}/>
                <Model url="/stone texturev6.glb" scale={scale} rotationSpeed={rotationSpeed} />
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

export default HomePage