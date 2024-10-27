import { useState } from 'react';

type RandomFontChangerProps = {
  text: string;  
};

const RandomFontChanger: React.FC<RandomFontChangerProps> = ({ text }) => {
  // List of random fonts (Tailwind font families)
  const fonts = [
    'font-sans',
    'font-serif',
    'font-mono',
    'font-display',
    'font-body',
    'font-poppins',
    'font-roboto',
    'font-lato',
    'font-open-sans',
    'font-merriweather',
  ];

  // State to keep track of the current font
  const [currentFont, setCurrentFont] = useState('font-sans');

  // Function to randomly select a font
  const changeFont = () => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    setCurrentFont(randomFont);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
              <div className={`text-l ${currentFont}`}>
      {text}
      </div>
      <button
        onClick={changeFont}
        className="text-xs px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700/50"
      >
        CLICK ME!
      </button>


    </div>
  );
};

export default RandomFontChanger;
