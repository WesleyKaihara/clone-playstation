import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import GT7Banner from '../../images/GT7_banner.jpg';
import NaveGames from '../../images/NaveGames.jpg';
import GranTurismo from '../../images/GranTurismo.webp';
import EldenRing from '../../images/EldenRing2.jpg'

export default function Lancamentos() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='lancamentos'>
      <div className="lancamentos_text">
        <h1 data-aos="fade" data-aos-delay="200">ESTE MÊS</h1>
        <h2 data-aos="fade" data-aos-delay="400">NO PLAYSTATION ®</h2>
        <p data-aos="fade" data-aos-delay="600">Confira os maiores lançamentos deste mês, além de recursos dedicados, guias e muito mais.</p>
        <button data-aos="fade" data-aos-delay="800">Saiba mais</button>
      </div>
      <img src={GT7Banner} alt="lancamentos_banner" className='lancamentos_banner' />
      <div className="lancamentos_content"  >
        <div className="lancamentos_item" >
          <img src={NaveGames} alt="NaveGames" data-aos="fade" data-aos-delay="200" />
          <p data-aos="fade" data-aos-delay="200">Melhores jogos de nave para PS4 e PS5 no estilo arcade</p>
        </div>
        <div className="lancamentos_item" >
          <img src={GranTurismo} alt="NaveGames" data-aos="fade" data-aos-delay="400" />
          <p data-aos="fade" data-aos-delay="300">Como o Gran Turismo 7 explora o poder do PS5</p>
        </div>
        <div className="lancamentos_item">
          <img src={EldenRing} alt="NaveGames" data-aos="fade" data-aos-delay="600" />
          <p data-aos="fade" data-aos-delay="300">Como sobreviver às suas primeiras horas em Elden Ring</p>
        </div>
      </div>

    </section>
  )
}