import styles from "./FAQ.module.css";
import { useState } from "react";

function ItemFaq(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.containerFaq}>
        <section>
          <h2>{props.titleFaq}</h2>
          <button onClick={() => setShow(!show)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </section>
        {show && <p className={styles.desc}>{props.responseFaq}</p>}
      </div>
    </>
  );
}

export default function FAQ() {
  return (
    <>
      <ItemFaq
        titleFaq="Posso usar meu próprio domínio?"
        responseFaq="Sim, você pode conectar um domínio personalizado à sua página, o que permite que o endereço fique totalmente no seu controle e mais profissional para compartilhar com seus seguidores."
      />
      <ItemFaq
        titleFaq="Consigo ver quantas pessoas clicaram nos links?"
        responseFaq="Sim, cada link tem estatísticas básicas que mostram quantas vezes ele foi clicado, ajudando você a entender quais conteúdos seus seguidores mais acessam."
      />
      <ItemFaq
        titleFaq="Posso remover a marca do serviço?"
        responseFaq="Sim, em planos pagos você pode ocultar a marca do serviço, deixando sua página mais limpa e personalizada, sem qualquer referência à plataforma."
      />
    </>
  );
}
