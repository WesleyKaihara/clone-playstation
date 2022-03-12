import './style.css';

import Header from '../../Components/header';
import Banner from '../../Components/banner';
import Produtos from '../../Components/produtos';
import Footer from '../../Components/footer';

function App() {
  return (
    <div className='Home'>
      <Header />
      <Banner />
      <main>
        <Produtos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
