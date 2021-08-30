import Navbar from '../../components/Navbar/navbar';
import homeImg from '../../assets/images/homeImg.svg';
import ButtonIcon from '../../components/ButtonIcon/button-icon';
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
          <ButtonIcon />
        </section>
      </main>
    </div>
  </>
);

export default Home;
