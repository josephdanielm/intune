import React from 'react';
import './App.css';
import spotifyLogo from './assets/spotify-icon.svg';
import githubLogo from './assets/github-mark-white.svg';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <nav className="py-2">
        <h1 className="font-display font-semibold text-4xl text-center">intune</h1>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <section className="mx-auto p-4 space-y-4 font-sans font-medium">
        <article className="border-2 border-slate-900">
          <p className="font-bold">-this is where the app will talk to the user.</p>
          <p>-how cool is that?</p>
        </article>
        <article>
          <p>This is where I&apos;ll output Spotify data.</p>
        </article>
      </section>
      <section id="profile">
        <h2>
          Logged in as <span id="displayName"></span>
        </h2>
        <span id="avatar"></span>
        <ul>
          <li>
            User ID: <span id="id"></span>
          </li>
          <li>
            Email: <span id="email"></span>
          </li>
          <li>
            Spotify URI: <a id="uri" href="#"></a>
          </li>
          <li>
            Link: <a id="url" href="#"></a>
          </li>
          <li>
            Profile Image: <span id="imgUrl"></span>
          </li>
        </ul>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="mx-auto flex w-fit py-2 gap-x-3">
        <img src={spotifyLogo} alt="Spotify Icon" className="w-8" />
        <img src={githubLogo} alt="Github Icon" className="w-8" />
      </div>
    </footer>
  );
}

export default App;
