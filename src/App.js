import { useState } from "react";
import "./App.css";

function App() {
  const [galaxy, setGalaxy] = useState(false);

  return (
    <div className="App">

      {/* ================= HOME PAGE ================= */}
      {!galaxy && (
        <div className="home">

          {/* animated purple galaxy background */}
          <div className="bgGalaxy"></div>

          <img
            className="gif"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTB4Zm5ucHJhMG9samk2bXBzdjRnMGZweDdkaDk1MDZ5MDV1ZGlzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
            alt="gif"
          />

          <h1 className="title">Hi, I am Rimita Ghosh ✨</h1>
          <h2 className="role">Web Developer • Tech Enthusiast</h2>

          <button className="galaxyBtn" onClick={() => setGalaxy(true)}>
            🌌 Open My Galaxy
          </button>

        </div>
      )}

      {/* ================= GALAXY PAGE ================= */}
      {galaxy && (
        <div className="universe">

          {/* TOP UI */}
          <div className="uiTop">
            <h1 className="name">✨ Rimita Ghosh ✨</h1>

            <button className="exitBtn" onClick={() => setGalaxy(false)}>
              Exit Galaxy
            </button>
          </div>

          {/* CENTER NAME */}
          <div className="centerName">
            Rimita Ghosh
          </div>

          {/* SPACE LAYERS */}
          <div className="stars"></div>
          <div className="nebula"></div>

          {/* SUN + PLANETS */}
          <div className="solarSystem">
            <div className="sun"></div>
          </div>

          <div className="earth"></div>
          <div className="moon"></div>
          <div className="mars"></div>
          <div className="jupiter"></div>

          {/* SPACE EFFECTS */}
          <div className="asteroids"></div>
          <div className="shootingStar"></div>

          {/* GIFT BUTTON */}
          <button className="giftBtn">🎁 Gift</button>

        </div>
      )}

    </div>
  );
}

export default App;
