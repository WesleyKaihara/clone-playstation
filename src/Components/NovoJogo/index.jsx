import './style.css';

import TheShow22 from '../../images/TheShow22.jpg';
import TheShow22Logo from '../../images/TheShow22_Logo.png';

export default function NovoJogo() {
  return (
    <section className='NovoJogo'>
      <img src={TheShow22} alt="TheShow22" className='NovoJogo_background' />
      <div className="NovoJogo_content">
        <img src={TheShow22Logo} alt="TheShow22Logo" className='TheShow22Logo' />
        <h1>Domine o The Show</h1>
        <p>Cada arremesso... Cada rebatida... Cada vitória.Deixe sua marca e comande o espetáculo em MLB The Show 22, dia 5 de abril, para PS4 e PS5.</p>
        <button>Já em pré-venda</button>
      </div>
    </section>
  )
}