import './style.css';

import GranTurismo from '../../images/GranTurismo.webp';
import GranTurismoLogo from '../../images/GT7_Logo.webp';
import EndenRing from '../../images/EldenRing.jpg';
import W2k22 from '../../images/W2k22.jpg';
import AppleTv from '../../images/AppleTv.jpg';
import Promotion from '../../images/semana-do-consumidor-playstation.webp';


export default function Banner() {
  return (
    <div className='banner'>
      <img src={GranTurismo} alt="banner" className='banner_img' />

      <img src={GranTurismoLogo} alt="Logo" className='banner_logo' />

      <div className="banner_content">
        <h1>Encontre seu caminho</h1>
        <p>Gran Turismo 7 baseia-se em gerações de experiência com simulação de corridas para oferecer a você os melhores recursos da história da franquia</p>
        <button>Saiba Mais</button>
      </div>

      <section className='banner_selector'>
        <div className="selected"><img src={GranTurismo} alt="GranTurismo7" /></div>
        <div className="notSelected"><img src={EndenRing} alt="GranTurismo7" /></div>
        <div className="notSelected"><img src={W2k22} alt="GranTurismo7" /></div>
        <div className="notSelected"><img src={AppleTv} alt="GranTurismo7" /></div>
        <div className="notSelected"><img src={Promotion} alt="GranTurismo7" /></div>
      </section>
    </div>
  )
}