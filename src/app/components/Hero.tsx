'use client'

import { GrainGradient } from '@paper-design/shaders-react';

export default function Hero() {
    return (
        <div>
            <div className='w-full h-full'>
                <GrainGradient
                    width={1920}
                    height={1080}
                    colors={["#702d00", "#88ddae", "#649078"]}
                    colorBack="#140a00"
                    softness={0.49}
                    intensity={0.57}
                    noise={0.34}
                    shape="dots"
                    speed={0.38}
                    scale={0.2}
                    rotation={90}
                />
            </div>
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