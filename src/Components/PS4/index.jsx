import './style.css';

import PS4Console from '../../images/PS4.jpg';
import PS4VR from '../../images/PS4VR.jpg';
import PS4Controle from '../../images/PS4Controle.jpg';


export default function PS4() {
  return (
    <section className='PS4'>
      <h1 className='ps4_title'>Explore o PlayStation®4</h1>
      <h2 className='ps4_subtitle'>Jogos incríveis e diversão sem parar. Nunca houve época melhor para se divertir com o PS4.</h2>
      <div className="ps4_content">
        <div className="ps4_card">
          <img src={PS4Console} alt="" />
          <h1>Playstation 4</h1>
          <p>Os jogos mais incríveis estão no PS4, com 1 TB de armazenamento.</p>
          <button>Saiba mais</button>
        </div>
        <div className="ps4_card">
          <img src={PS4VR} alt="" />
          <h1>Playstation 4</h1>
          <p>Os jogos mais incríveis estão no PS4, com 1 TB de armazenamento.</p>
          <button>Saiba mais</button>
        </div>
        <div className="ps4_card">
          <img src={PS4Controle} alt="" />
          <h1>Playstation 4</h1>
          <p>Os jogos mais incríveis estão no PS4, com 1 TB de armazenamento.</p>
          <button>Saiba mais</button>
        </div>
      </div>
    </section>
  )
}