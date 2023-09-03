import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import IconButton from "./components/IconButton";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <div className="content">
        <header>
          <h1>Portfolio</h1>
          <Navbar/>
        </header>
        <Routes>
          <Route path="/" element={<AboutMe/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <div className="footer">
        <footer>
          <section className="social">
            <ul>
              <li>
                <IconButton iconname='ri-github-fill'
                            url='https://github.com/galiagacandia'></IconButton>
              </li>
              <li>
                <IconButton iconname='ri-linkedin-box-fill'
                            url='https://www.linkedin.com/in/grover-leopoldo-aliaga-candia-3a40a58a'></IconButton>
              </li>
              <li>
                <IconButton iconname='ri-facebook-circle-fill'
                            url='https://www.facebook.com/leopoldo.aliaga.1/'></IconButton>
              </li>

            </ul>
          </section>
          <section className="copyright">@2023 Grover Aliaga</section>
        </footer>
      </div>
    </div>
  );
}

export default App;
