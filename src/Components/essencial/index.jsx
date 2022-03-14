import './style.css';

import EssencialIMG from '../../images/essencial.jpg';

export default function Essencial() {
  return (
    <section className='essencial'>
      <div className="essencial_text">
        <h1>Novas promoções na PlayStation™Store</h1>
        <p>Descontos incríveis, curadoria de coletâneas e promoções sazonais para PS5, PS4 e PS VR, tudo em um só lugar.</p>
        <button>Ver todos os descontos</button>
      </div>
      <img src={EssencialIMG} alt="Essencial" className='EssencialIMG' />
    </section>
  )
}