import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
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

export function Model2({ url, scale }) {
    const gltf = useLoader(GLTFLoader, url);
    return <primitive object={gltf.scene} scale={scale} />;
}
