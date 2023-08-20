import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Portfolio</h1>
        <Navbar />
      </header>
        <Routes>
          <Route path="/" element={<AboutMe />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      <footer>
        <section className="social">
          <ul>
            <li><i className="ri-github-fill"></i></li>
            <li><i className="ri-linkedin-box-fill"></i></li>
            <li><i className="ri-facebook-circle-fill"></i></li>
          </ul>
        </section>
        <section className="copyright">@2023 Grover Aliaga</section>
      </footer>
    </div>
  );
}

export default App;
