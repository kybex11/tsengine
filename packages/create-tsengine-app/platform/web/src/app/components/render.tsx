'use client';
import { useEffect } from "react";

export default function Render() {
  useEffect(() => {
    const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas 
        id="render" 
        className="fixed top-0 left-0 w-full h-full"
      />
    </>
  );
}
