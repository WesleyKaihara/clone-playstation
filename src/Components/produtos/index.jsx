import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import PS5 from '../../images/ps5.png';
import DualSense from '../../images/dualsense.jpg';
import Headset from '../../images/headset.jpg';
import ControleMidea from '../../images/Media.png';
import Camera from '../../images/camera.jpg';
import { useState } from 'react';



export default function Produtos() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [produtoIMG, setProdutoIMG] = useState(PS5);
  const [info, setInfo] = useState({
    title: "Console Playstation 5",
    desc: "Descubra uma nova geração de jogos incríveis de Playstation."
  });

  function SelecionarProduto(item) {
    for (let i = 1; i <= 5; i++) {
      const a = document.getElementById(i);
      if (a.classList.length > 1) {
        a.classList.remove('selecionado');
      }
    }
    const element = document.getElementById(item.target.id);

    element.classList.toggle('selecionado');

    switch (item.target.id) {
      case "1":
        setProdutoIMG(PS5);
        setInfo({
          title: "Console Playstation 5",
          desc: "Descubra uma nova geração de jogos incríveis de Playstation."
        });
        break
      case "2":
        setProdutoIMG(DualSense);
        setInfo({
          title: "Controle sem fio DualSense",
          desc: "Mergulhe na experiência de jogo com um controle que suporta resposta tátil e efeitos de gatilho dinâmicos."
        });
        break
      case "3":
        setProdutoIMG(Headset);
        setInfo({
          title: "Headeset sem fio Pulse 3D",
          desc: "Desfrute de uma experiência perfeita e sem fio com um headset adaptado para áudio 3D nos consoles PS5."
        });
        break
      case "4":
        setProdutoIMG(ControleMidea);
        setInfo({
          title: "Controle de mídia",
          desc: "Conveniência e um layout intuitivo para você controlar filmes,serviços de streaming e muito mais no seu console PS5."
        });
        break
      case "5":
        setProdutoIMG(Camera);
        setInfo({
          title: "Câmera HD",
          desc: "Adicione sua própria imagem aos vídeos de jogabilidade e transmissões com uma captura suave,nítida e Full HD."
        });
        break
      default:
        console.log('Erro')
    }
  }

  return (
    <div>
      <div className="produtos_content">
        <div className="produtos_text">
          <h1 data-aos="fade-up-right" >{info.title}</h1>
          <p data-aos="fade-up-right">{info.desc}</p>
          <button data-aos="fade-up-right">Saiba mais</button>
        </div>
        <img src={produtoIMG} alt={produtoIMG} data-aos="fade-up-left" />
      </div>

      <div className="produtos_selector">
        <div data-aos="fade" id='1' className="produtos_item" onClick={(item) => SelecionarProduto(item)}>
          <img src={PS5} alt="ps5" id='1' />
          <p id='1'>Console PS5</p>
        </div>
        <div data-aos="fade" data-aos-delay="200" id='2' className="produtos_item" onClick={(item) => SelecionarProduto(item)}>
          <img src={DualSense} alt="DualSense" id='2' />
          <p id='2'>Controle sem fio DualSense</p>
        </div>
        <div data-aos="fade" data-aos-delay="400" id='3' className="produtos_item" onClick={(item) => SelecionarProduto(item)}>
          <img src={Headset} alt="ps5" id='3' />
          <p id='3'>Headset sem fio PULSE 3D™</p>
        </div>
        <div data-aos="fade" id='4' data-aos-delay="600" className="produtos_item" onClick={(item) => SelecionarProduto(item)}>
          <img src={ControleMidea} alt="ps5" id='4' />
          <p id='4'>Console de mídia</p>
        </div>
        <div data-aos="fade" id='5' data-aos-delay="800" className="produtos_item" onClick={(item) => SelecionarProduto(item)}>
          <img src={Camera} alt="Camera" id='5' />
          <p id='5'>Câmera HD</p>
        </div>
      </div>

    </div>
  )
}