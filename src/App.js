import { useState } from "react";
import "./App.css";

function App() {
  const [galaxy, setGalaxy] = useState(false);

  return (
    <div className="App">

      {/* ================= HOME ================= */}
      {!galaxy && (
        <div className="home">

          {/* GIF (RESTORED) */}
          <img
            className="gif"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTB4Zm5ucHJhMG9samk2bXBzdjRnMGZweDdkaDk1MDZ5MDV1ZGlzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
            alt="gif"
          />

          {/* NAME CENTER */}
          <h1 className="nameBlink">✨ Rimita Ghosh ✨</h1>
          <h2 className="role">Web Developer • Tech Enthusiast</h2>

          {/* ABOUT */}
          <div className="box about">
            <h3>About Me</h3>
            <p>I enjoy building projects and improving my skills through learning.</p>
          </div>

          {/* SKILLS */}
          <div className="box skills">
            <h3>Skills</h3>
            <p>C, C++, Java, Python, JavaScript</p>
            <p>React Native, Flutter</p>
          </div>

          {/* CONTACT */}
          <div className="box contact">
            <h3>Contact</h3>

            <a href="mailto:rimitaghosh477@gmail.com">
              📧 Email Me
            </a>

            <a
              href="https://github.com/rimi-sudo434"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub Profile
            </a>
          </div>

          {/* BUTTON */}
          <button className="galaxyBtn" onClick={() => setGalaxy(true)}>
            🌌 Open My Galaxy
          </button>

        </div>
      )}

      {/* ================= GALAXY ================= */}
      {galaxy && (
        <div className="universe">

          {/* NAME TOP CENTER */}
          <h1 className="spaceName">✨ Rimita Ghosh ✨</h1>

          <button className="backBtn" onClick={() => setGalaxy(false)}>
            Exit Galaxy
          </button>

          {/* BACKGROUND */}
          <div className="stars"></div>
          <div className="nebula"></div>

          {/* SPACE OBJECTS (MULTIPLE REALISTIC FEEL) */}
          <div className="sun"></div>
          <div className="earth"></div>
          <div className="moon"></div>

          <div className="planet p1"></div>
          <div className="planet p2"></div>
          <div className="planet p3"></div>
          <div className="planet p4"></div>

          {/* SHOOTING STAR */}
          <div className="shootingStar"></div>

        </div>
      )}

    </div>
  );
}

export default App;
