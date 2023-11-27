
import React from 'react';

const Sparkles = () => {
  const images = [
    'sparkle.png',
  ];

  const getRandomPosition = () => {
    const x = Math.random() * 2000 - 200;
    const y = Math.random() * 2000 - 200;
    return { x, y };
  };

  const getRandomRotation = () => {
    return Math.random() * (Math.PI / 2) - (Math.PI / 4);
  };

  const getRandomScale = () => {
    return Math.random() * 0.05 + 0.05;
  };

  return (
    <div style={{ 
      position: 'absolute',
      width: '100%', 
      height: '100%',
      transform: 'translate(-2rem, -2rem)',
      zIndex: '-2',
      overflow: 'hidden',
    }}>
      {
        [...Array(700)].map((_, i) => (
        images.map((image, index) => (
          <img
            key={`sparkle-${index}-${i}`}
            src={image}
            alt="Sparkle"
            style={{
              position: 'absolute',
              top: `${getRandomPosition().y}px`,
              left: `${getRandomPosition().x}px`,
              transform: `rotate(${getRandomRotation()}rad) scale(${getRandomScale()})`,
            }}
          />
        ))))
      }
    </div>
  );
};

export default Sparkles;
