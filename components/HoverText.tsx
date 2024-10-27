import { useState } from 'react';

const HoverTextInsideContainer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center w-64 h-64">
      {/* Outer container */}
      <div
        className="relative w-full h-full bg-blue-500 flex items-center justify-center text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p>Hover over me!</p>
      </div>

      {/* Hover text container, positioned outside the box */}
      {isHovered && (
        <div className="absolute top-full mt-2 w-auto bg-black text-white p-2 rounded shadow-lg">
          <p className="text-lg">I fit nicely outside!</p>
        </div>
      )}
    </div>
  );
};

export default HoverTextInsideContainer;
