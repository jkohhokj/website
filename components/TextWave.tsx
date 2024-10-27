import React, { useState } from 'react';

interface Props{
    text: string;
}

const CharacterSpans: React.FC<Props> = ({text}) => {
  const [inputText] = useState(text);

  const createCharacterSpans = (text: string) => {
    return Array.from(text).map((char, index) => (
    //   <span key={index} className='char animate-wavy' style={{ animationDelay: `${index * 100}ms` }}>{char}</span>
        <span
      key={index}
      className='char animate-wavy'
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {char === ' ' ? '\u00A0' : char} {/* Use non-breaking space for rendering */}
    </span>
    ));
  };

  return (
    <div>
      <div className="character-container">
        {createCharacterSpans(inputText)}
      </div>
      <style jsx>{`
        .character-container {
          display: flex;
          flex-wrap: wrap; /* Wrap characters to the next line */
          margin-top: 20px; /* Space between input and characters */
        }
        .char {
          margin: 0 2px; /* Space between characters */
          transition: transform 0.3s ease; /* Smooth transition for hover effect */
        }
        .char:hover {
          transform: translateY(-5px); /* Lift effect on hover */
        }
      `}</style>
    </div>
  );
};

export default CharacterSpans;
