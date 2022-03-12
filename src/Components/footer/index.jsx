import './style.css';

import SonyLogo from '../../images/ps-bug.svg';
import SIE from '../../images/sie.svg';

export default function Footer() {
  return (
    <footer>
      <div className="sony_information">
        <img src={SonyLogo} alt="SonyLogo" />
        <img src={SIE} alt="SIE" />
      </div>
      <div className="footer_menu">
        <ul>
          <li>Suporte</li>
          <li>Política de privacidade</li>
          <li>Termos de serviço</li>
          <li>PlayStation Studios</li>
          <li>Termos de serviço</li>
          <li>Sobre a SIE</li>
          <li>PlayStation e o meio ambiente</li>
        </ul>
        <ul>
          <li>Termos de serviço e contrato do usuário</li>
          <li>Política de cancelamento da PS ™Store</li>
          <li>Avisos sobre saúde</li>
          <li>Classificacao</li>
          <li>Carreiras</li>
          <li>Desenvolvedores</li>
          <li>Mapa do Site</li>
        </ul>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>YouTube</li>
          <li>Instagram</li>
          <li>Twitch</li>
        </ul>
      </div>
    </footer>
  )
}