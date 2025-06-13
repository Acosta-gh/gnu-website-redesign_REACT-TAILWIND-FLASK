import React from 'react';

function GradientImage({
  src,
  alt,
  containerClass = '',
  imageClass = '',
  colorTop = 'rgba(255,255,255,0)',
  colorBottom = 'var(--primary-color)'
}) {
  const gradientStyle = `linear-gradient(to bottom, ${colorTop} 0%, ${colorBottom} 100%)`;
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
          background: gradientStyle
        }}
      />
    </div>
  );
}

export default GradientImage;
