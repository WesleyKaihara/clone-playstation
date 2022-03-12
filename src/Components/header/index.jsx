import './style.css';

import PlaystationLogo from '../../images/Logo.png'

export default function Header() {
  return (
    <header>
      <div className="sony"><h1>Sony</h1></div>
      <div className="menu">
        <div className="menu_links">
          <img src={PlaystationLogo} alt="PlaystationLogo" className='Logo_Ps' />
          <ul className='menu_links_content'>
            <li>Jogos</li>
            <li>Hardware</li>
            <li>Serviços</li>
            <li>Notícias</li>
            <li>Loja</li>
            <li>Suporte</li>
          </ul>
        </div>

        <div className="header_login">
          <button>Inciar sessão</button>
        </div>
      </div>
    </header>
  )
}