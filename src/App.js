import { useState } from "react";
import './App.css';

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">

      {/* ================= PAGE 1 ================= */}
      {page === 1 && (
        <div className="page dark">

          <h1 className="blink">✨ Rimita Ghosh ✨</h1>

          <h2>🌱 About Me</h2>
          <p>
            I enjoy building projects and improving my skills through learning.
          </p>

          <button onClick={() => setPage(2)} className="btn">
            Next → Skills
          </button>

        </div>
      )}

      {/* ================= PAGE 2 ================= */}
      {page === 2 && (
        <div className="page dark">

          <h2>💻 Skills</h2>
          <p>
            C, C++, Java, Python, JavaScript<br />
            React Native, Flutter
          </p>

          <button onClick={() => setPage(3)} className="btn">
            Next → Contact
          </button>

        </div>
      )}

      {/* ================= PAGE 3 ================= */}
      {page === 3 && (
        <div className="page galaxy-bg">

          <h2>📬 Contact</h2>
          <p>Email: rimitaghosh477@gmail.com</p>
          <p>GitHub: github.com/rimi-sudo434</p>

          <button onClick={() => setPage(4)} className="btn">
            Open My Galaxy
          </button>

          {/* moving galaxy background */}
          <div className="moving-stars"></div>

        </div>
      )}

      {/* ================= PAGE 4 (FULL GALAXY) ================= */}
      {page === 4 && (
        <div className="galaxy">

          <h1 className="spaceName">✨ Rimita Ghosh ✨</h1>

          <button className="backBtn" onClick={() => setPage(1)}>
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
