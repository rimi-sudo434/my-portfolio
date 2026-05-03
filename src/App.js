import { useState } from "react";
import './App.css';

function App() {
  const [galaxy, setGalaxy] = useState(false);

  return (
    <div className="App">

      {/* ================= HOME ================= */}
      {!galaxy && (
        <div className="home">

          <h1 className="blinkName">✨ Rimita Ghosh ✨</h1>
          <p>Web Developer • Tech Enthusiast</p>

          <h2>🌱 About Me</h2>
          <p>
            I enjoy building projects and continuously improving through learning.
          </p>

          <h2>💻 Skills</h2>
          <p>
            Languages: C, C++, Java, Python, JavaScript<br />
            Frameworks: React Native, Flutter
          </p>

          <h2>📬 Contact</h2>
          <p>Email: rimitaghosh477@gmail.com</p>
          <p>GitHub: github.com/rimi-sudo434</p>

          <button className="btn" onClick={() => setGalaxy(true)}>
            Open My Galaxy
          </button>

        </div>
      )}

      {/* ================= GALAXY ================= */}
      {galaxy && (
        <div className="universe">

          {/* INFO INSIDE SPACE */}
          <div className="infoPanel">
            <h1 className="spaceName">✨ Rimita Ghosh ✨</h1>

            <h2>🌱 About Me</h2>
            <p>I enjoy building projects and continuously improving through learning.</p>

            <h2>💻 Skills</h2>
            <p>
              Languages: C, C++, Java, Python, JavaScript<br />
              Frameworks: React Native, Flutter
            </p>

            <h2>📬 Contact</h2>
            <p>Email: rimitaghosh477@gmail.com</p>
            <p>GitHub: github.com/rimi-sudo434</p>
          </div>

          <button className="backBtn" onClick={() => setGalaxy(false)}>
            Exit Galaxy
          </button>

          {/* SPACE ELEMENTS */}
          <div className="stars"></div>
          <div className="nebula"></div>

          <div className="earth"></div>
          <div className="station"></div>

          <div className="planet p1"></div>
          <div className="planet p2"></div>
          <div className="planet p3"></div>

        </div>
      )}

    </div>
  );
}

export default App;
