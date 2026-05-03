import { useState } from "react";
import "./App.css";

function App() {
  const [galaxy, setGalaxy] = useState(false);

  return (
    <div className="App">

      {/* ================= HOME ================= */}
      {!galaxy && (
        <div className="home">

          <div className="stars"></div>
          <div className="nebula"></div>

          <div className="content">

            <img
              className="gif floatAnim"
              src="https://media4.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
              alt="gif"
            />

            <h1 className="nameGlow">Rimita Ghosh</h1>

            <h2 className="role">
              Web Developer <span className="dot">•</span> Tech Enthusiast
            </h2>

            <div className="card about fadeUp">
              <h3>🌱 About Me</h3>
              <p>I enjoy building projects and improving my skills through learning.</p>
            </div>

            <div className="card skills fadeUp delay1">
              <h3>💻 Skills</h3>
              <p>C, C++, Java, Python, JavaScript</p>
              <p>React Native, Flutter</p>
            </div>

            <div className="card contact fadeUp delay2">
              <h3>📬 Contact</h3>

              <a href="mailto:rimitaghosh477@gmail.com">📧 Email Me</a>

              <a
                href="https://github.com/rimi-sudo434"
                target="_blank"
                rel="noreferrer"
              >
                💻 GitHub Profile
              </a>
            </div>

            <button className="btn pulseBtn" onClick={() => setGalaxy(true)}>
              🌌 Explore My Universe
            </button>

          </div>
        </div>
      )}

      {/* ================= UNIVERSE ================= */}
      {galaxy && (
        <div className="universe">

          {/* 🔥 UPDATED TITLE */}
          <h1 className="animatedTitle">Rimita Ghosh</h1>

          <button className="backBtn fixBtn" onClick={() => setGalaxy(false)}>
            Exit
          </button>

          <div className="stars"></div>
          <div className="nebula"></div>

          <div className="solar">

            <div className="sun"></div>

            <div className="orbit o1"><div className="planet mercury"></div></div>
            <div className="orbit o2"><div className="planet venus"></div></div>
            <div className="orbit o3"><div className="planet earth"></div></div>
            <div className="orbit o4"><div className="planet mars"></div></div>
            <div className="orbit o5"><div className="planet jupiter"></div></div>

            <div className="orbit o6">
              <div className="saturn">
                <div className="ring"></div>
              </div>
            </div>

            <div className="orbit o7"><div className="planet uranus"></div></div>
            <div className="orbit o8"><div className="planet neptune"></div></div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;
