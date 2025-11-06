import React, { useRef, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Model({ url, scale, rotationSpeed }) {
    const gltf = useLoader(GLTFLoader, url);
    const meshRef = useRef();

    // Rotate the model every frame
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += rotationSpeed;
        }
    });

    return (
        <primitive
            object={gltf.scene}
            ref={meshRef}
            scale={scale}
        />
    );
}

export function Model3({ url, scale, wireframe }) {
    const gltf = useLoader(GLTFLoader, url);
    const modelRef = useRef();
  
    useEffect(() => {
      if (modelRef.current) {
        // Traverse the model's scene graph
        modelRef.current.traverse((child) => {
          if (child.isMesh) {
            // Enable wireframe for all materials
            child.material.wireframe = wireframe;
          }
        });
      }
    }, [wireframe]);
  
    return <primitive object={gltf.scene} ref={modelRef} scale={scale} />;
  }
