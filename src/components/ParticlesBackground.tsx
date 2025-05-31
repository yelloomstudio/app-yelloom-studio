'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { BufferGeometry, Points as ThreePoints } from 'three';

const Particles = ({ count = 5000 }) => {
  const points = useRef<ThreePoints<BufferGeometry>>(null);
  
  // Generate random particles in a sphere
  const particlesPosition = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  // Material Design 3 color palette
  const colorPalette = [
    '#6750A4', // Primary
    '#625B71', // On Surface Variant
    '#7D5260', // Secondary Container
    '#1D1B20', // Surface Dim
  ];

  for (let i = 0; i < count; i++) {
    // Position particles in a sphere
    const radius = Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    particlesPosition[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    particlesPosition[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particlesPosition[i * 3 + 2] = radius * Math.cos(phi);
    
    // Assign random colors from the palette
    const colorIndex = Math.floor(Math.random() * colorPalette.length);
    const color = new THREE.Color(colorPalette[colorIndex]);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useEffect(() => {
    if (!points.current) return;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Animate particles
    const positions = points.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Add some subtle movement (very slow)
      positions[i3] += Math.sin(time * 0.08 + i) * 0.0002;
      positions[i3 + 1] += Math.cos(time * 0.08 + i) * 0.0002;
      
      // Add some noise for organic movement (very slow)
      positions[i3] += Math.sin(time * 0.08 + i) * 0.001;
      positions[i3 + 1] += Math.cos(time * 0.08 + i) * 0.001;
      positions[i3 + 2] += Math.sin(time * 0.1 + i) * 0.001;
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={points} positions={particlesPosition} colors={colors}>
      <PointMaterial
        size={0.02}
        color="#6750A4"
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        vertexColors
        alphaTest={0.01}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#1D1B20']} />
        <ambientLight intensity={0.5} />
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
