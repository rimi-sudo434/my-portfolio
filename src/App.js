import './App.css';

function App() {
  return (
    <div className="App">

      <h1>Hi, I'm Rimita Ghosh 👩‍💻</h1>
      <p>Web Developer • Tech Enthusiast</p>

      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTB4Zm5ucHJhMG9samk2bXBzdjRnMGZweDdkaDk1MDZ5MDV1ZGlzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
        width="250"
        alt="gif"
      />

      {/* ABOUT */}
      <h2>🌱 About Me</h2>
      <p>I enjoy building web projects and continuously improving my coding skills.</p>

      {/* SKILLS */}
      <h2>💻 Skills</h2>
      <p>Languages: C, C++, Java, Python, JavaScript  
      Frameworks: React Native, Flutter</p>

      {/* CONTACT */}
      <h2>📬 Contact</h2>

      <p>
        Email: <a href="mailto:rimitaghosh477@gmail.com">rimitaghosh477@gmail.com</a>
      </p>

      <p>
        GitHub:{" "}
        <a
          href="https://github.com/rimi-sudo434"
          target="_blank"
          rel="noreferrer"
        >
          github.com/rimi-sudo434
        </a>
      </p>

    </div>
  );
}

export default App;
