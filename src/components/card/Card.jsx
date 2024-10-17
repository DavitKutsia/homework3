import React from 'react';
import './Card.css';

export default function Card({ imgSrc, name, age, desc = 'No desc', bg }) {
  const handleButtonClick = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <div className='card' style={{ background: bg }}>
      <img src={imgSrc} alt="" width={150} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <p>{desc}</p>
      <button onClick={handleButtonClick}>Go to Amazon</button>
    </div>
  );
}
