import './style.css';

import Header from '../../Components/header';
import Banner from '../../Components/banner';
import Produtos from '../../Components/produtos';
import Footer from '../../Components/footer';
import Lancamentos from '../../Components/lancamentos';
import NovoJogo from '../../Components/NovoJogo';

function App() {
  return (
    <div className='Home'>
      <Header />
      <Banner />
      <main>
        <Produtos />
      </main>
      <Lancamentos />
      <NovoJogo />
      <Footer />
    </div>
  );
}

export default App;
