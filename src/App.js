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
          <p>Email: rimitaghosh477@gmail.com</p>
          <p>GitHub: github.com/rimi-sudo434</p>

          <button className="galaxy-btn" onClick={() => setGalaxy(true)}>
            🌌 Open Galaxy Portal
          </button>
        </>
      )}

      {galaxy && (
        <div className="space-world">

          <h1 className="space-name">✨ Rimita Ghosh ✨</h1>

          <p className="space-text">
            You have entered a different universe...
          </p>

          {/* SPACE STATION */}
          <div className="space-station"></div>

          {/* PLANETS */}
          <div className="planet p1"></div>
          <div className="planet p2"></div>
          <div className="planet p3"></div>

          {/* STARS */}
          <div className="stars"></div>

          <button className="galaxy-btn" onClick={() => setGalaxy(false)}>
            🚪 Exit Galaxy
          </button>

        </div>
      )}

    </div>
  );
}

export default App;
