import productImg from 'assets/images/product.png';
import { ProductPrice } from 'components/ProductPrice/product-price';

export const ProductDetail = () => {
  return (
    <div className="container">
      <main className="base-card mt-3">
        <header>
          <button type="button" className="btn btn-light mt-3">
            <span className="text-primary me-2">&#10094;</span>
            <strong className="text-uppercase">voltar</strong>
          </button>
        </header>
        <div className="d-flex flex-column p-3">
          <section>
            <div className="border rounded p-3 mb-3">
              <img src={productImg} alt="product name" className="w-100" />
            </div>
            <article>
              <h3>Computador Desktop - Intel Core i7</h3>
              <ProductPrice price={2779} />
            </article>
          </section>
          <section className="border rounded p-3 text-black-50 mt-3">
            <h6>Descrição do produto</h6>
            <p className="mt-3">
              Projetado para garantir a produtividade no seu dia a dia O
              desempenho que você precisa para uma jornada eficiente é garantido
              pelos processadores Intel da família Core Conectividade ao seu
              alcance Saídas de áudio com qualidade HD e conexões USB estão
              dipooníveis na frontal do seu CorPc Baixo consumo Mesmo
              trabalhando todos os dias, você não tera sustos na conta de
              energia. Fizemos tudo bem feito, para o seu CorPC seja eficiente,
              silencioso e econômico no consumo de energia elétrica.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
