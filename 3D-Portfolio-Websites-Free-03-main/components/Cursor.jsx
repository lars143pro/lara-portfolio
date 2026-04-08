import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [isPointer, setIsPointer] = useState(false);

  // Setup the smooth "spring" movement (so it doesn't feel laggy)
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 16); // Center the 32px div
      mouseY.set(e.clientY - 16);

      // Check if hovering over a link or button
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className='fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden xl:block'
      style={{
        x: mouseX,
        y: mouseY,
        backgroundColor: isPointer ? '#00f2ff' : 'transparent',
        border: '2px solid #00f2ff',
        /* THE GLOW */
        boxShadow: isPointer 
          ? '0 0 20px #00f2ff, 0 0 40px #00f2ff' 
          : '0 0 10px rgba(0, 242, 255, 0.5)',
      }}
      animate={{
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Small center dot */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full shadow-[0_0_5px_#00f2ff]' />
    </motion.div>
  );
};

export default Cursor;