import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const texts = [
    "Hi, I'm Rimita Ghosh 👩‍💻",
    "I am a Web Developer 💻",
    "Tech Enthusiast 🚀"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">

      {/* Animated Heading */}
      <h1>{texts[index]}</h1>

      <p>Web Developer | Tech Enthusiast</p>

      {/* YOUR PHOTO */}
      <img
        src="/rimi-sudo434.jpeg"
        width="200"
        alt="my photo"
      />

      {/* GIF */}
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTB4Zm5ucHJhMG9samk2bXBzdjRnMGZweDdkaDk1MDZ5MDV1ZGlzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
        width="250"
        alt="gif"
      />

      {/* ABOUT */}
      <h2>🌱 About Me</h2>
      <p>
        I like building things step by step. Learning by doing &gt; just reading.
      </p>

      {/* SKILLS */}
      <h2>💻 Skills</h2>
      <p>HTML | CSS | Java | Python | GitHub</p>

      {/* BUTTON */}
      <button onClick={() => alert("Thanks for visiting my portfolio 👩‍💻")}>
        Click Me
      </button>

    </div>
  );
}

export default App;
