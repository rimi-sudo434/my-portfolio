import { useState } from "react";
import './App.css';

function App() {
  const [galaxy, setGalaxy] = useState(false);

  return (
    <div className="App">

      {!galaxy && (
        <div className="home">
          <h1>Hi, I'm Rimita Ghosh 👩‍💻</h1>
          <p>Web Developer • Tech Enthusiast</p>

          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTB4Zm5ucHJhMG9samk2bXBzdjRnMGZweDdkaDk1MDZ5MDV1ZGlzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
            width="250"
            alt="gif"
          />

          <h2>🌱 About Me</h2>
          <p>I enjoy building projects and improving my skills through continuous learning.</p>

          <h2>💻 Skills</h2>
          <p>C, C++, Java, Python, JavaScript | React Native, Flutter</p>

          <h2>📬 Contact</h2>
          <p>Email: rimitaghosh477@gmail.com</p>
          <p>GitHub: github.com/rimi-sudo434</p>

          <button className="btn" onClick={() => setGalaxy(true)}>
            Open My Galaxy
          </button>
        </div>
      )}

      {galaxy && (
        <div className="galaxy">

          <h1 className="name">✨ Rimita Ghosh ✨</h1>

          <div className="stars"></div>
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
