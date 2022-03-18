import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import PsnPlusIMG from '../../images/PsnPlus.png';
import PlusLogo from '../../images/PlayStationPlus.png'

export default function PsnPlus() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section>
      <img src={PsnPlusIMG} alt="PsnPlusBackground" className='PsnPlusBackground' data-aos="fade" />
      <div className="plus_content">
        <img src={PlusLogo} alt="PsnPlusLogo" data-aos="fade" data-aos-delay="200" />
        <p data-aos="fade" data-aos-delay="400">Melhore sua experiência PlayStation com o modo multijogador online, jogos mensais, descontos exclusivos e muito mais.</p>
        <button data-aos="fade" data-aos-delay="600">Explore a Playstation Plus</button>
      </div>
    </section>
  )

}