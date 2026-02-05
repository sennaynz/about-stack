import { useState } from "react";
import FAQ from "./components/FAQ";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="home-container">
        <div className="details-container">
          <h1 className="title">
            Crie sua pilha de<br></br>links personalizada
          </h1>
          <p className="desc">
            Organize todos os seus links em uma bio com design responsivo e
            recursos avançados, totalmente grátis.
          </p>
          <button className="start-button">Personalize a sua bio</button>
        </div>
      </div>
      <div className="faq-container">
        <h1 className="title">Perguntas frequentes</h1>
        <FAQ />
      </div>
      <footer>
        <span className="copyright-text">
          Todos os direitos reservados &copy; 2026.<br></br>Design por @sennaynz
          (CC0).
        </span>
      </footer>
    </>
  );
}

export default App;
