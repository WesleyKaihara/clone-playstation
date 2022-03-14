import './style.css';

import GT7Banner from '../../images/GT7_banner.jpg';
import NaveGames from '../../images/NaveGames.jpg';
import GranTurismo from '../../images/GranTurismo.webp';
import EldenRing from '../../images/EldenRing2.jpg'

export default function Lancamentos() {
  return (
    <section className='lancamentos'>
      <div className="lancamentos_text">
        <h1>ESTE MÊS</h1>
        <h2>NO PLAYSTATION ®</h2>
        <p>Confira os maiores lançamentos deste mês, além de recursos dedicados, guias e muito mais.</p>
        <button>Saiba mais</button>
      </div>
      <img src={GT7Banner} alt="lancamentos_banner" className='lancamentos_banner' />
      <div className="lancamentos_content">
        <div className="lancamentos_item">
          <img src={NaveGames} alt="NaveGames" />
          <p>Melhores jogos de nave para PS4 e PS5 no estilo arcade</p>
        </div>
        <div className="lancamentos_item">
          <img src={GranTurismo} alt="NaveGames" />
          <p>Como o Gran Turismo 7 explora o poder do PS5</p>
        </div>
        <div className="lancamentos_item">
          <img src={EldenRing} alt="NaveGames" />
          <p>Como sobreviver às suas primeiras horas em Elden Ring</p>
        </div>
      </div>

    </section>
  )
}