import Navbar from '../../components/Navbar/navbar';
import homeImg from '../../assets/images/homeImg.svg';
import './home-styles.scss';

const Home = () => (
  <>
    <Navbar />
    <div className="home-container">
      <main>
        <section>
          <img src={homeImg} alt="" />
        </section>
        <section>
          <h2>Conheça o melhor catálogo de produtos</h2>
          <p>
            Ajudaremos você a encontrar os melhores produtos disponíveis no
            mercado.
          </p>
        </section>
        <section>
          <button>
            <span>INICIE AGORA A SUA BUSCA</span>
            <span>go</span>
          </button>
        </section>
      </main>
    </div>
  </>
);

export default Home;
