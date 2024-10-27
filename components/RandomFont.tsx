import React, { useEffect, useState } from 'react';

const fonts = [
  'font-sans',    // Tailwind fonts
  'font-serif',
  'font-mono',
//   'font-cursive', // Custom font if added in CSS
  'font-extrabold',
  'font-light',
  'font-thin',
  'font-black',
];


type RandomFontTextProps = {
  text: string;  // Add a text prop
};

const RandomFontText: React.FC<RandomFontTextProps> = ({ text }) => {
  const [randomFont, setRandomFont] = useState('');

  useEffect(() => {
    // Pick a random font from the fonts array on component mount (page reload)
    const randomIndex = Math.floor(Math.random() * fonts.length);
    setRandomFont(fonts[randomIndex]);
  }, []);

  return (
    <div className={`${randomFont} text-l`}>
      {text}
    </div>
  );
};

export default RandomFontText;
