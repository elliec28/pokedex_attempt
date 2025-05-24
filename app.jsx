import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.body);
root.render(<App />);

function App() {
  return (
    <div className="banana">
      <h1>React me! Test!</h1>
    </div>
  )
}