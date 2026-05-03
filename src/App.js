import { useState } from "react";
import './App.css';

function App() {
  const [galaxy, setGalaxy] = useState(false);

  return (
    <div className="App">

      {!galaxy && (
        <>
          <h1>Hi, I'm Rimita Ghosh 👩‍💻</h1>
          <p>Web Developer • Tech Enthusiast</p>

          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTB4Zm5ucHJhMG9samk2bXBzdjRnMGZweDdkaDk1MDZ5MDV1ZGlzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
            width="250"
            alt="gif"
          />

          <h2>🌱 About Me</h2>
          <p>I enjoy building web projects and continuously improving my coding skills.</p>

          <h2>💻 Skills</h2>
          <p>
            Languages: C, C++, Java, Python, JavaScript<br />
            Frameworks: React Native, Flutter
          </p>

          <h2>📬 Contact</h2>

          <p>
            Email: <a href="mailto:rimitaghosh477@gmail.com">rimitaghosh477@gmail.com</a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/rimi-sudo434"
              target="_blank"
              rel="noreferrer"
            >
              github.com/rimi-sudo434
            </a>
          </p>

          <button className="galaxy-btn" onClick={() => setGalaxy(true)}>
            🌌 Open Galaxy
          </button>
        </>
      )}

      {galaxy && (
        <div className="galaxy">
          <h1 className="blink">✨ Rimita Ghosh ✨</h1>
          <p className="space-text">Welcome to the Galaxy Universe 🚀</p>

          <div className="planet planet1"></div>
          <div className="planet planet2"></div>
          <div className="planet planet3"></div>

          <button className="galaxy-btn" onClick={() => setGalaxy(false)}>
            🔙 Back
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
