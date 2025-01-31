import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model2 } from "../components/SebastopolCannon";

const Rotatable = () => {
    const [scale, setScale] = useState([1, 1, 1]);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [3, 5, 5], fov: 50 }} >
                <ambientLight intensity={1} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={3}
                    castShadow
                />
                <pointLight position={[10, 10, 10]} intensity={0.5}/>
                <Model2 url="/stone texturev6.glb" scale={scale} />

                {/* Add OrbitControls for drag-to-rotate */}
                <OrbitControls
                    enableZoom={false} // Disable zooming
                    enablePan={false} // Disable panning
                    rotateSpeed={1} // Adjust rotation speed
                />
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

export default Rotatable