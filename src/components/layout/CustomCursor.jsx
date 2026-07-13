import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (!isDesktop) return undefined;

    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const handleOver = (e) => {
      const target = e.target;
      const interactive =
        target.closest('a, button, input, textarea, [role="button"]') !== null;
      setIsHovering(interactive);
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
            isHovering ? 'scale-[2.5]' : 'scale-100'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
