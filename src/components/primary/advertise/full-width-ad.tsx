import React, { useEffect, useRef } from 'react';

interface FullWidthAdProps {
  imageSource: string;
  height?: number;
  duration?: number;
  link: string;
}

const FullWidthAd: React.FC<FullWidthAdProps> = ({
  imageSource,
  height = 200,
  duration = 8000,
  link = 'https://x.com',
}) => {
  const imgRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const el = imgRef.current;
//     if (!el) return;

//     let scale = 1.15;
//     let shrinking = true;
//     const step = 0.15 / (duration / 2 / 16);

//     const tick = () => {
//       if (shrinking) {
//         scale -= step;
//         if (scale <= 1) shrinking = false;
//       } else {
//         scale += step;
//         if (scale >= 1.15) shrinking = true;
//       }
//       el.style.transform = `scale(${scale})`;
//       requestAnimationFrame(tick);
//     };

//     const id = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(id);
//   }, [duration]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full overflow-hidden block"
      style={{ height }}
    >
      <div ref={imgRef} className="w-full h-full">
        <img
          src={imageSource}
          alt="Advertisement"
          className="w-full h-full object-contain"
        />
      </div>
    </a>
  );
};

export default FullWidthAd;
