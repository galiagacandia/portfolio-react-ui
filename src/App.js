import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Portfolio</h1>
        <nav>
          <ul>
            <li><a href="">About Me</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="profile">
        <article className="profile-about-me">
          <h2>I'm Grover Aliaga</h2>
          <p>
            A Software Developer with more than ten years of experience in Java
            and related technologies.
          </p>
        </article>
        <article>
          <img className="profile-img" src="/photo-profile.jpg" width="400px" alt=""/>
        </article>
      </section>
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
