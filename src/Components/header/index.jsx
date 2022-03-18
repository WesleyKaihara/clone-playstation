import './style.css';

import PlaystationLogo from '../../images/Logo.png'
import { useState } from 'react';

export default function Header() {

  const [mobile, setMobile] = useState("");

  function MobileMenu() {
    if (mobile === "mostrar") {
      setMobile("");
    } else {
      setMobile("mostrar");
    }
    return;
  }

  return (
    <header>
      <div className="sony"><h1>Sony</h1></div>
      <div className={`menu ${mobile}`}>
        <div className="menu_links">
          <a href="/"><img src={PlaystationLogo} alt="PlaystationLogo" className='Logo_Ps' /></a>
          <img src={PlaystationLogo} alt="PlaystationLogo" onClick={MobileMenu} className='playstationMobileLogo' />
          <ul className={`menu_links_content ${mobile}`}>
            <li>Jogos
            </li>
            <li>Hardware</li>
            <li>Serviços</li>
            <li>Notícias</li>
            <li>Loja</li>
            <li>Suporte</li>
          </ul>
        </div>

        <div className={`header_login ${mobile}`}>
          <button>Inciar sessão</button>
        </div>
      </div>
    </header >
  )
}