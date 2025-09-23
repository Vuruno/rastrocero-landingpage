import React from 'react';
import './App.css';
// Import your .webm animation file
import logoAnimation from './assets/logo-animation.webm';

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        {/* Use a <video> tag for .webm files */}
        <video 
          className="App-video" 
          src={logoAnimation} 
          autoPlay 
          loop 
          muted 
        />
        <h1>We're working on it!</h1>
        <p>Our new page is coming soon. Stay tuned!</p>
      </header>
    </div>
  );
}

export default App;