import './style.css';

import PS5 from '../../images/ps5.png';

export default function Produtos() {
  return (
    <div className="produtos">
      <div className="produtos_text">
        <h1>Console Playstation 5</h1>
        <p>Descubra uma nova geração de jogos incríveis de Playstation.</p>
        <button>Saiba mais</button>
      </div>
      <img src={PS5} alt="" />
    </div>
  )
}