'use client'

import { MeshGradient } from '@paper-design/shaders-react';

export default function HeroImg() {
    return (
        <div className="w-full h-full">
            <MeshGradient
                width={1920}
                height={1080}
                colors={["#d4d4d4", "#000000", "#2b2b2b", "#595959"]}
                distortion={0.78}
                swirl={0.65}
                grainMixer={0.5}
                grainOverlay={0.55}
                speed={0.32}
                scale={0.8}
            />
            <style jsx>{`
            canvas {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        `}</style>
        </div>
    );
}