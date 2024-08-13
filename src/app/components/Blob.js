"use client"
import React, { useState, useEffect, useRef } from 'react';
import './Blob.css';

const Blob = () => {
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const targetPosition = useRef({ x: 0, y: 0 });
    const interBubbleRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            targetPosition.current = { x: event.clientX, y: event.clientY };
        };

        const move = () => {
            setCurX((prevX) => prevX + (targetPosition.current.x - prevX) / 20);
            setCurY((prevY) => prevY + (targetPosition.current.y - prevY) / 20);

            if (interBubbleRef.current) {
                interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }

            requestAnimationFrame(move);
        };

        window.addEventListener('mousemove', handleMouseMove);
        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [curX, curY]);

    return <div class="gradient-bg">
        <div class="gradients-container">
            {/* <div class="g1"></div> */}
            {/* <div class="g2"></div> */}
            {/* <div class="g3"></div> */}
            {/* <div class="g4"></div> */}
            {/* <div class="g5"></div> */}
            <div class="interactive" ref={interBubbleRef}></div>
        </div>
    </div>
};

export default Blob;
