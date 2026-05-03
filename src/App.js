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
              className="gif"
              src="https://media4.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
              alt="gif"
            />

            <h1 className="nameBlink">✨ Rimita Ghosh ✨</h1>
            <h2 className="role">Web Developer • Tech Enthusiast</h2>

            <div className="card about">
              <h3>🌱 About Me</h3>
              <p>I enjoy building projects and improving my skills through learning.</p>
            </div>

            <div className="card skills">
              <h3>💻 Skills</h3>
              <p>C, C++, Java, Python, JavaScript</p>
              <p>React Native, Flutter</p>
            </div>

            <div className="card contact">
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

            <button className="btn" onClick={() => setGalaxy(true)}>
              🌌 Explore My Universe
            </button>

          </div>
        </div>
      )}

      {/* ================= UNIVERSE ================= */}
      {galaxy && (
        <div className="universe">

          <h1 className="spaceName">✨ Rimita Ghosh ✨</h1>

          <button className="backBtn" onClick={() => setGalaxy(false)}>
            Exit
          </button>

          <div className="stars"></div>
          <div className="nebula"></div>

          <div className="solar">

            <div className="sun"></div>

            <div className="orbit o1"><div className="planet p1"></div></div>
            <div className="orbit o2"><div className="planet p2"></div></div>
            <div className="orbit o3"><div className="planet p3"></div></div>
            <div className="orbit o4"><div className="planet p4"></div></div>
            <div className="orbit o5"><div className="planet p5"></div></div>
            <div className="orbit o6"><div className="planet p6"></div></div>
            <div className="orbit o7"><div className="planet p7"></div></div>
            <div className="orbit o8"><div className="planet p8"></div></div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;
