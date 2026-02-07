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
          <a href="/home/" className="link">Home</a>
          <a href="/sobre/" className="link">Sobre</a>
          <a href="/começar/" className="link">Começar</a>
          <a href="/contatos/" className="link">Contatos</a>
          <i class="fa-solid fa-bars"></i>
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
      <div className="about-container">
        <div className="details-container">
          <h1 className="title">Um link. Toda a sua presença online.</h1>
          <p className="desc">Centralize seus links, destaque seu conteúdo e facilite o acesso do seu público com uma página rápida, personalizável e profissional.</p>
        </div>
        <div className="more-container">
          <div className="box">
            <h1 className="title">
              <i className="fa-solid fa-palette"></i> Personalização total
            </h1>
            <p className="desc">Edite cores, fotos e links para deixar sua página com a sua identidade.</p>
          </div>
          <div className="box">
            <h1 className="title">
              <i className="fa-solid fa-bolt"></i> Rápido e prático
            </h1>
            <p className="desc">Crie seu link em minutos e compartilhe na bio sem complicação.</p>
          </div>
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
