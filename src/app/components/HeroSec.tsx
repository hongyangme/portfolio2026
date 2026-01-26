import HeroImg from './HeroImg';

export default function HeroSec() {
    return (
        <section className="w-full h-screen sticky top-0 overflow-hidden -z-1">
            <HeroImg />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <p className='text-4xl mb-4'>2026</p>
                <h1 className='text-4xl font-bold'>홍찬희의 포트폴리오</h1>
                <p className='mt-4 text-2xl'>Web Design & Development Portfolio</p>
            </div>
        </section>
    );
}