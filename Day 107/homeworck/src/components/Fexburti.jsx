import React from "react";
import ReactDOM from "react-dom/client";

// Header კომპონენტი
function Header() {
  const headerStyle = {
    textAlign: "center",
    backgroundColor: "#1e90ff",
    color: "white",
    padding: "1.5rem",
  };

  return (
    <header style={headerStyle}>
      <h1>Welcome to Football World</h1>
      <p>Discover the passion for the beautiful game</p>
    </header>
  );
}

// TeamList კომპონენტი
function TeamList() {
  const sectionStyle = {
    padding: "1rem",
    margin: "1rem",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    margin: "0.5rem 0",
  };

  const teams = ["Real Madrid", "Barcelona", "Manchester United", "Bayern Munich", "Juventus"];

  return (
    <section style={sectionStyle}>
      <h2>Top Football Clubs</h2>
      <ul style={listStyle}>
        {teams.map((team, index) => (
          <li key={index} style={listItemStyle}>
            {team}
          </li>
        ))}
      </ul>
    </section>
  );
}

// About კომპონენტი
function About() {
  const sectionStyle = {
    padding: "1rem",
    margin: "1rem",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section style={sectionStyle}>
      <h2>About Football</h2>
      <p>
        Football, also known as soccer, is the world’s most popular sport. It is played by millions of players
        and watched by billions of fans worldwide.
      </p>
    </section>
  );
}

// Footer კომპონენტი
function Footer() {
  const footerStyle = {
    textAlign: "center",
    backgroundColor: "#1e90ff",
    color: "white",
    padding: "1rem",
    position: "fixed",
    bottom: 0,
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2024 Football World. All rights reserved.</p>
    </footer>
  );
}

// App კომპონენტი
function App() {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f0f8ff",
    color: "#333",
    minHeight: "100vh",
    paddingBottom: "3rem", // Footer-ისთვის ადგილი
  };

  return (
    <div style={appStyle}>
      <Header />
      <main>
        <About />
        <TeamList />
      </main>
      <Footer />
    </div>
  );
}

// ReactDOM რეინდერინგი
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
