import React from 'react';

function GradientImage({ src, alt, containerClass = '', imageClass = '' }) {
  return (
    <div className={`relative ${containerClass}`}>
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className={`opacity-35 block filter grayscale ${imageClass}`}
        />
      </div>
      <div
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/3"
        style={{
          background:'linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--primary-color) 100%)'
        }}
      />
    </div>
  );
}

export default GradientImage;
