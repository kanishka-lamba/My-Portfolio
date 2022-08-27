import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import About from "./PortfolioContainer/AboutMe/About";
import Projects from "./PortfolioContainer/Projects/Projects";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Profile />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
