import { useState } from "react";
import './App.css';

function App() {
  const [galaxy, setGalaxy] = useState(false);

  return (
    <div className={galaxy ? "space" : "App"}>

      {!galaxy && (
        <div className="home">
          <h1>Hi, I'm Rimita Ghosh 👩‍💻</h1>
          <p>Web Developer • Tech Enthusiast</p>

          <button className="btn" onClick={() => setGalaxy(true)}>
            Open My Galaxy
          </button>
        </div>
      )}

      {galaxy && (
        <>
          <h1 className="name">✨ Rimita Ghosh ✨</h1>

          <button className="backBtn" onClick={() => setGalaxy(false)}>
            ⬅ Back
          </button>

          <div className="stars"></div>

          <div className="station"></div>

          <div className="planet p1"></div>
          <div className="planet p2"></div>
          <div className="planet p3"></div>
        </>
      )}

    </div>
  );
}

export default App;
