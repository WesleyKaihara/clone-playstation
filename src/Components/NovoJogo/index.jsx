import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import TheShow22 from '../../images/TheShow22.jpg';
import TheShow22Logo from '../../images/TheShow22_Logo.png';

export default function NovoJogo() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='NovoJogo'>
      <img src={TheShow22} alt="TheShow22" className='NovoJogo_background' />
      <div className="NovoJogo_content" >
        <img src={TheShow22Logo} alt="TheShow22Logo" className='TheShow22Logo' data-aos="fade-right" data-aos-delay="200" />
        <h1 data-aos="fade-right" data-aos-delay="400">Domine o The Show</h1>
        <p data-aos="fade-right" data-aos-delay="600">Cada arremesso... Cada rebatida... Cada vitória.Deixe sua marca e comande o espetáculo em MLB The Show 22, dia 5 de abril, para PS4 e PS5.</p>
        <button data-aos="fade-right" data-aos-delay="800">Já em pré-venda</button>
      </div>
    </section>
  )
}