import './style.css';

import PS5 from '../../images/ps5.png';
import DualSense from '../../images/dualsense.jpg';
import Headset from '../../images/headset.jpg';
import ControleMidea from '../../images/Media.png';
import Camera from '../../images/camera.jpg';



export default function Produtos() {
  return (
    <div>
      <div className="produtos_content">
        <div className="produtos_text">
          <h1>Console Playstation 5</h1>
          <p>Descubra uma nova geração de jogos incríveis de Playstation.</p>
          <button>Saiba mais</button>
        </div>
        <img src={PS5} alt="PS5" />
      </div>

      <div className="produtos_selector">
        <div className="produtos_item selecionado">
          <img src={PS5} alt="ps5" />
          <p>Console PS5</p>
        </div>
        <div className="produtos_item ">
          <img src={DualSense} alt="ps5" />
          <p>Controle sem fio DualSense</p>
        </div>
        <div className="produtos_item">
          <img src={Headset} alt="ps5" />
          <p>Headset sem fio PULSE 3D™</p>
        </div>
        <div className="produtos_item">
          <img src={ControleMidea} alt="ps5" />
          <p>Console de mídia</p>
        </div>
        <div className="produtos_item">
          <img src={Camera} alt="Camera" />
          <p>Câmera HD</p>
        </div>
      </div>

    </div>
  )
}