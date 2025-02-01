import { Navbar } from "../components/navbar"
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Model } from "../components/SebastopolCannon";
import { OrbitControls } from "@react-three/drei";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const HomePage = () => {
    const [scale, setScale] = useState([1, 1, 1]);
    const rotationSpeed = 0.015;

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <div className="absolute font-['poppins'] w-4/15 h-4/13 bg-[#232323] text-white ml-7 mb-5 mt-6 mr-5 rounded-[12px] px-10  flex  flex-col 
    justify-center gap-5


            ">
                
                    <h2 className="text-[13px] font-bold tracking-wider">
                    Sabastabol Cannon
                </h2>
                <p className="text-[12px] pl-2 pr-2 leading-[175%] tracking-wide text-justify">
                One of the most iconic pieces in Ethiopia's artillery history is the Sebastopol mortar, commissioned by Emperor 
                Tewodros II in the mid-19th century. Named after the Crimean city of Sevastopol, 
                the mortar weighed approximately 6.7 tons and was capable of firing half-ton artillery rounds
                </p>
                
                
            </div>

            <div className="absolute text-white font-['poppins'] tracking-wider font-light bottom-0 w-15/34 h-1/10 mb-1.5 rounded-[12px] left-1/2 -translate-x-1/2 bg-[#232323]
            flex  px-7 py-3   ">
                
              <div className="w-max h-full pb-2   text-[8px] flex flex-col justify-end items-center gap-1 ">
                
              <label>H</label>
              <label>L</label>
              <label>W</label>
              </div>
              <div className=" flex justify-around text-[10px] w-full">



           
              <div className=" flex flex-col items-center w-[max-content]  h-full ">
              <label>Stone Canon</label>
              <label>1.6m</label>
              <label>1.64m</label>
              <label>1.64m</label>
              </div>
              <div className="flex flex-col items-center w-max h-full ">
              <p>Wooden Wheels</p>
              <p>1.0m</p>
              <p>1.0m</p>
              <p>0.2m</p>
              </div>
              <div className="flex flex-col items-center w-max h-full ">
              <p>Wooden bed</p>
              <p>0.55m</p>
              <p>2.0m</p>
              <p>1.72m</p>
              </div>
              <div className="flex flex-col items-center w-max h-full ">
              <p>Sabastopol Canon</p>
              <p>2.4m</p>
              <p>2.6m</p>
              <p>2.2m</p>
              </div>
              </div>
            </div>
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