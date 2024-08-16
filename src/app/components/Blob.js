"use client"
import React, { useEffect, useRef } from 'react';
import './Blob.css';

const Blob = () => {
    const interBubbleRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (interBubbleRef.current) {
                const x = event.clientX + window.scrollX;
                const y = event.clientY + window.scrollY;
                interBubbleRef.current.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="interactive" ref={interBubbleRef}></div>;
};

export default Blob;
