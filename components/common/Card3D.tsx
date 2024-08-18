'use client';

import {
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from 'framer-motion';
import { ReactNode } from 'react';

interface Card3DProps {
  children: ReactNode;
}

function Card3D({ children }: Card3DProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['7.5deg', '-7.5deg']
  );
  const rotateY = useTransform(
    mouseXSpring,
    [0.5, -0.5],
    ['-7.5deg', '7.5deg']
  );

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      className="absolute top-0 left-0 "
    >
      {children}
    </motion.div>
  );
}

export default Card3D;
