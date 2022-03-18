import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import GranTurismo from '../../images/GranTurismo.webp';
import GranTurismoLogo from '../../images/GT7_Logo.png';

import EndenRing from '../../images/EldenRing.jpg';
import EldenRingLogo from '../../images/EldenRingLogo.png'

import GTA5 from '../../images/GTA5.png';
import GTA5ONLINE from "../../images/GTA5online.webp";
import GTA5logo from '../../images/LogoGTA5png.png'

import AppleTv from '../../images/AppleTv.jpg';
import AppleTvLogo from '../../images/AppleTVLogo.svg.png';


import Promotion from '../../images/semana-do-consumidor-playstation.webp';
import SConsumidorLogo from '../../images/SemanaConsumidorLogo.png';
import SConsumidor from '../../images/SemanaConsumidor.png';

import { useState } from 'react';


export default function Banner() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [background, setBackground] = useState(GranTurismo);
  const [BannerIMG, setBannerIMG] = useState(GranTurismoLogo);
  const [info, setInfo] = useState({
    title: "Encontre seu caminho",
    desc: "Gran Turismo 7 baseia-se em gerações de experiência com simulação de corridas para oferecer a você os melhores recursos da história da franquia"
  });

  function ChangeBanner(item) {
    let nome = (item.target.alt);

    switch (nome) {
      case "GranTurismo7":
        setBackground(GranTurismo);
        setBannerIMG(GranTurismoLogo);
        setInfo({
          title: "Encontre seu caminho",
          desc: "Gran Turismo 7 baseia-se em gerações de experiência com simulação de corridas para oferecer a você os melhores recursos da história da franquia"
        })
        break;
      case "EndenRing":
        setBackground(EndenRing);
        setBannerIMG(EldenRingLogo);
        setInfo({ title: "Já disponível para PS4 e PS5 ", desc: "Use o poder do Elden Ring e torne-se um Elden Lord nas Lands Between." });
        break;
      case "GTA5":
        setBackground(GTA5);
        setBannerIMG(GTA5logo);
        setInfo({ title: "Já disponível para PS5", desc: "Pegue seu GTA Online grátis,exclusivo para PS5 até 14 de junho de 2022" });
        break;
      case "AppleTv":
        setBackground(AppleTv);
        setBannerIMG(AppleTvLogo);
        setInfo({ title: "Desbloquei 3 meses de Apple TV+ no seu console PS4", desc: "Seu ps4 ficou ainda mais divertido.Explore Apple Originals no seu console de jogos favorito.São aplicadas restrições." });
        break;
      case "Promotion":
        setBannerIMG(SConsumidorLogo);
        setBackground(SConsumidor);
        setInfo({ title: "Promoção !!", desc: "Aproveite a Semana do Consumidor Playstation para aumentar sua coleção.Clássicos e grandes jogos de PS4 e PS5 com preços especiais.Confira!" });
        break;
      default:
        console.log("Erro")
    }
  }

  return (
    <div className='banner'>
      <img src={background} alt="banner" className='banner_img' />

      <img data-aos="fade-right" src={BannerIMG} alt="Logo" className='banner_logo' />

      <div className="banner_content" data-aos="fade-right">
        <h1 data-aos="fade-right">{info.title}</h1>
        <p data-aos="fade-right">{info.desc}</p>
        <button>Saiba Mais</button>
      </div>

      <section className='banner_selector'>
        <div data-aos="fade" className="banner_selector_item" onClick={(item) => { ChangeBanner(item) }}><img src={GranTurismo} alt="GranTurismo7" /></div>
        <div data-aos="fade" data-aos-delay="200" className="banner_selector_item" onClick={(item) => { ChangeBanner(item) }}><img src={EndenRing} alt="EndenRing" /></div>
        <div data-aos="fade" data-aos-delay="400" className="banner_selector_item" onClick={(item) => { ChangeBanner(item) }}><img src={GTA5ONLINE} alt="GTA5" /></div>
        <div data-aos="fade" data-aos-delay="600" className="banner_selector_item" onClick={(item) => { ChangeBanner(item) }}><img src={AppleTv} alt="AppleTv" /></div>
        <div data-aos="fade" data-aos-delay="00" className="banner_selector_item" onClick={(item) => { ChangeBanner(item) }}><img src={Promotion} alt="Promotion" /></div>
      </section>
    </div>
  )
}