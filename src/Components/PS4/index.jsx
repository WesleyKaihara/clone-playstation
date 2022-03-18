import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import PS4Console from '../../images/PS4.jpg';
import PS4VR from '../../images/PS4VR.jpg';
import PS4Controle from '../../images/PS4Controle.jpg';


export default function PS4() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='PS4'>
      <h1 className='ps4_title'>Explore o PlayStation®4</h1>
      <h2 className='ps4_subtitle'>Jogos incríveis e diversão sem parar. Nunca houve época melhor para se divertir com o PS4.</h2>
      <div className="ps4_content">
        <div className="ps4_card" >
          <img src={PS4Console} alt="Ps4 console" data-aos="fade" data-aos-delay="200" />
          <h1 data-aos="fade" data-aos-delay="200">Playstation 4</h1>
          <p data-aos="fade" data-aos-delay="400">Os jogos mais incríveis estão no PS4, com 1 TB de armazenamento.</p>
          <button data-aos="fade" data-aos-delay="600">Saiba mais</button>
        </div>
        <div className="ps4_card" >
          <img src={PS4VR} alt="Ps4 Vr" data-aos="fade" data-aos-delay="400" />
          <h1 data-aos="fade" data-aos-delay="400">Playstation 4</h1>
          <p data-aos="fade" data-aos-delay="600">Os jogos mais incríveis estão no PS4, com 1 TB de armazenamento.</p>
          <button data-aos="fade" data-aos-delay="800">Saiba mais</button>
        </div>
        <div className="ps4_card">
          <img src={PS4Controle} alt="Ps4 Controle" data-aos="fade" data-aos-delay="600" />
          <h1 data-aos="fade" data-aos-delay="600">Playstation 4</h1>
          <p data-aos="fade" data-aos-delay="800">Os jogos mais incríveis estão no PS4, com 1 TB de armazenamento.</p>
          <button data-aos="fade" data-aos-delay="1000">Saiba mais</button>
        </div>
      </div>
    </section>
  )
}