import './style.css';

import PsnPlusIMG from '../../images/PsnPlus.png';
import PlusLogo from '../../images/PlayStationPlus.png'

export default function PsnPlus() {
  return (
    <section>
      <img src={PsnPlusIMG} alt="PsnPlusBackground" className='PsnPlusBackground' />
      <div className="plus_content">
        <img src={PlusLogo} alt="PsnPlusLogo" />
        <p>Melhore sua experiência PlayStation com o modo multijogador online, jogos mensais, descontos exclusivos e muito mais.</p>
        <button>Explore a Playstation Plus</button>
      </div>
    </section>
  )

}