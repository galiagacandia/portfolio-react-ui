import './App.scss';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import IconButton from "./components/IconButton";
import Skills from "./pages/Skills";
import {useState} from "react";

function App() {
  const [theme, setTheme] = useState('default-theme');

  //setTheme(theme === 'default-theme' ? 'dark-theme': 'default-theme')


  return (
    <div className="App default-theme">
      <div className="content content-primary">
        <header className="header header-tertiary">
          <h1 className="header-title header-title-primary">Portfolio</h1>
          <Navbar />
          {/*<Navbar setTheme={setTheme}/>*/}
        </header>
        <Routes>
          <Route path="/" element={<AboutMe/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <div className="footer">
        <footer className="footer-content footer-content-tertiary">
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
