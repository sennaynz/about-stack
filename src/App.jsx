import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="start-container">
        <header>
          <div className="container-title">
            <span className="title">About Stack</span>
          </div>
          <nav className="container-links">
            <a href="" className="link">
              Início
            </a>
            <a href="" className="link">
              Sobre
            </a>
            <a href="" className="link">
              Contribuição
            </a>
            <a href="" className="link">
              Contatos
            </a>
          </nav>
          <div className="container-buttons">
            <button>Começar</button>
          </div>
        </header>
        <div className="container-start">
          <div className="container-details">
            <h1 className="title">Crie sua pilha de links personalizada</h1>
            <p className="desc">
              Organize todos os seus links em uma bio com design responsivo e
              recursos avançados, totalmente grátis.
            </p>
            <button>Personalize a sua bio</button>
          </div>
          <div className="container-banner">
            <img src="/banner.png" alt="" className="banner" />
          </div>
        </div>
      </div>
      <div className="container-contribution">
        <div className="container-details">
          <h1 className="title">Contribua para o projeto</h1>
          <p className="desc">
            Envie sugestões, críticas ou denúncias e ajude a tornar a
            experiência dos usuários ainda melhor.
          </p>
          <button>Fazer uma contribuição</button>
        </div>
      </div>
      <footer>
        <span className="copyright-text">
          &copy; 2026. Design por @sennaynz, licenciado sob Creative Commons
          Attribution (CC BY). Todos os créditos devem ser mantidos.
        </span>
        <button className="top">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </footer>
    </>
  );
}

export default App;
