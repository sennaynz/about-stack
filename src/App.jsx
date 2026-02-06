import { useState } from "react";
import FAQ from "./components/FAQ";
import banner from "./assets/home.png"
import "./App.css";

function App() {
  return (
    <>
      <header>
        <a href="" className="link">
          <span className="title">About Stack</span>
        </a>
        <nav className="links-container">
          <a href="" className="link">Home</a>
          <a href="" className="link">Sobre</a>
          <a href="" className="link">Começar</a>
          <a href="" className="link">Contatos</a>
        </nav>
      </header>
      <div className="home-container">
        <div className="details-container">
          <h1 className="title">Crie sua pilha de<br></br>links personalizada</h1>
          <p className="desc">Organize todos os seus links em uma bio com design responsivo e recursos avançados, totalmente grátis.</p>
          <button class="start-button">Personalize a sua bio</button>
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="faq-container">
        <h1 className="title">Perguntas frequentes</h1>
        <FAQ />
      </div>
      <footer>
        <div className="footer-container">
          <span className="copyright-text">
            About Stack &copy; Todos os Direitos Reservados.<br></br>Desenvolvido por @sennaynz.
          </span>
        </div>
      </footer >
    </>
  );
}

export default App;
