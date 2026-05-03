import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [galaxy, setGalaxy] = useState(false);

  const [showTitle, setShowTitle] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 500);
    setTimeout(() => setShowRole(true), 1500);
    setTimeout(() => setShowAbout(true), 2500);
    setTimeout(() => setShowSkills(true), 3500);
    setTimeout(() => setShowContact(true), 4500);
  }, []);

  return (
    <div className="App">

      {/* ================= HOME ================= */}
      {!galaxy && (
        <div className="home">

          {showTitle && (
            <h1 className="twinkle title">
              Hi, I am Rimita Ghosh
            </h1>
          )}

          {showRole && (
            <h2 className="twinkle role">
              Web Developer • Tech Enthusiast
            </h2>
          )}

          {showAbout && (
            <div className="fade">
              <h2>🌱 About Me</h2>
              <p>
                I enjoy building projects and continuously improving through learning.
              </p>
            </div>
          )}

          {showSkills && (
            <div className="fade">
              <h2>💻 Skills</h2>
              <p>
                C, C++, Java, Python, JavaScript<br />
                React Native, Flutter
              </p>
            </div>
          )}

          {showContact && (
            <div className="fade">
              <h2>📬 Contact</h2>
              <p>Email: rimitaghosh477@gmail.com</p>
              <p>GitHub: github.com/rimi-sudo434</p>
            </div>
          )}

          <button className="btn" onClick={() => setGalaxy(true)}>
            Open My Galaxy
          </button>

        </div>
      )}

      {/* ================= GALAXY ================= */}
      {galaxy && (
        <div className="universe">

          <div className="infoPanel">
            <h1 className="spaceName">✨ Rimita Ghosh ✨</h1>
          </div>

          <button className="backBtn" onClick={() => setGalaxy(false)}>
            Exit Galaxy
          </button>

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
