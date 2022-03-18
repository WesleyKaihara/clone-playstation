import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import EssencialIMG from '../../images/essencial.jpg';

export default function Essencial() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='essencial'>
      <div className="essencial_text">
        <h1 data-aos="fade">Novas promoções na PlayStation™Store</h1>
        <p data-aos="fade" data-aos-delay="300">Descontos incríveis, curadoria de coletâneas e promoções sazonais para PS5, PS4 e PS VR, tudo em um só lugar.</p>
        <button data-aos="fade" data-aos-delay="400">Ver todos os descontos</button>
      </div>
      <img src={EssencialIMG} alt="Essencial" className='EssencialIMG' data-aos="fade" data-aos-delay="600" />
    </section>
  )
}