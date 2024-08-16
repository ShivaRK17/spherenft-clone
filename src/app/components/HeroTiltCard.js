"use client"
import Image from 'next/image';
import { useState, useCallback } from 'react';
import heroimg from '../images/Hero/image.png'

function throttle(func, delay) {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

export const HeroTiltCard = () => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const onMouseMove = useCallback(
        throttle((e) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 10;  // Adjust divisor for smoother tilt
            const rotateY = (centerX - x) / 10;  // Adjust divisor for smoother tilt

            setRotate({ x: rotateX, y: rotateY });
        }, 50),  // Reduce throttle delay for more responsiveness
        []
    );

    const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div className='p-5 relative flex justify-center items-center'>
            <div
                className="card w-[70%] relative rounded-xl bg-white transition-transform duration-300 ease-out will-change-transform"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                }}
            >
                {/* <div className="pulse absolute -inset-2 rounded-lg bg-gradient-to-b from-[#ffffff26] to-[#ffffff00] border-[#826a92] border-[2px] opacity-75 blur-xl" /> */}
                <div className="relative p-5 flex h-full w-full select-none items-center justify-center rounded-xl text-sm font-light text-slate-300 bg-gradient-to-r from-[#ffffff26] to-[#ffffff00] border-[#826a92] border-[1px] bg-black">
                    <Image alt='heroimg' src={heroimg} className='rounded-xl' />
                    <div className='w-[70%] bg-gradient-to-r font-inter from-[#ffffff47] via-[#ffffff38] to-[#ffffff0f] absolute bottom-0 right-0 p-5 rounded-xl border-[#826a92] border-[1px] translate-x-[40%] translate-y-[20%] backdrop-blur-sm'>
                        <div className='flex w-full justify-evenly'>
                            <p>Total Volume</p>
                            <p>1.7M ETH</p>
                        </div>
                        <div className='flex w-full justify-evenly'>
                            <p className='text-slate-400'>Floor Price</p>
                            <p className='text-slate-400'>19.89 ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
