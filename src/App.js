import { useState } from "react";
import "./App.css";

function App() {
  const [galaxy, setGalaxy] = useState(false);

  return (
    <div className="App">

      {/* ================= HOME ================= */}
      {!galaxy && (
        <div className="home">

          {/* GIF */}
          <img
            className="gif"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTB4Zm5ucHJhMG9samk2bXBzdjRnMGZweDdkaDk1MDZ5MDV1ZGlzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
            alt="gif"
          />

          <h1 className="nameBlink">✨ Rimita Ghosh ✨</h1>
          <h2 className="role">Web Developer • Tech Enthusiast</h2>

          <button className="galaxyBtn" onClick={() => setGalaxy(true)}>
            🌌 Explore My Universe
          </button>

        </div>
      )}

      {/* ================= UNIVERSE ================= */}
      {galaxy && (
        <div className="universe">

          <h1 className="spaceName">✨ Rimita Ghosh ✨</h1>

          <button className="backBtn" onClick={() => setGalaxy(false)}>
            Exit
          </button>

          {/* BACKGROUND */}
          <div className="stars"></div>

          {/* SOLAR SYSTEM STYLE */}
          <div className="solar">

            <div className="sun"></div>

            <div className="orbit o1"><div className="planet p1"></div></div>
            <div className="orbit o2"><div className="planet p2"></div></div>
            <div className="orbit o3"><div className="planet p3"></div></div>
            <div className="orbit o4"><div className="planet p4"></div></div>

            {/* ASTEROID BELT */}
            <div className="belt"></div>

            <div className="orbit o5"><div className="planet p5"></div></div>
            <div className="orbit o6"><div className="planet p6"></div></div>
            <div className="orbit o7"><div className="planet p7"></div></div>
            <div className="orbit o8"><div className="planet p8"></div></div>

          </div>

          {/* COMET */}
          <div className="comet"></div>

        </div>
      )}

    </div>
  );
}

export default App;
