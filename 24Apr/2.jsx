import React from 'react';

function App() {
  const items = ['React', 'JavaScript', 'CSS'];

  return (
    <div>
      <h1>My Favorite Technologies</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;