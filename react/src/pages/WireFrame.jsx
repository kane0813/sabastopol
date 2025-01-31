import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model3 } from '../components/SebastopolCannon';

const WireFrame = () => {
    const [scale, setScale] = useState([1, 1, 1]);
    const [wireframe, setWireframe] = useState(false);

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
                <Model3 url="/stone texturev6.glb" scale={scale} wireframe={wireframe} />

                {/* Add OrbitControls for drag-to-rotate */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={1}
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

            {/* Toggle wireframe */}
            <div className="absolute bottom-4 left-4 flex text-white font-['poppins'] justify-center items-center">
                <label>
                    <input
                        type="checkbox"
                        checked={wireframe}
                        className='mx-4'
                        onChange={(e) => setWireframe(e.target.checked)}
                    />
                    WireFrame
                </label>
            </div>
        </div>
    );
}

export default WireFrame