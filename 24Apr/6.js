
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ColorToggleButton = () => {
  const [isBlue, setIsBlue] = useState(true);

  const toggleColor = () => {
    setIsBlue(prevIsBlue => !prevIsBlue);
  };

  const buttonStyle = {
    backgroundColor: isBlue ? 'blue' : 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button
      style={buttonStyle}
      onClick={toggleColor}
    >
      Color: {isBlue ? 'Blue' : 'Red'}
    </button>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<ColorToggleButton />);
