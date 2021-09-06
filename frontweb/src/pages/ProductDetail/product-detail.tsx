import productImg from 'assets/images/product.png';
import { ProductPrice } from 'components/ProductPrice/product-price';

export const ProductDetail = () => {
  return (
    <div className="container">
      <main className="base-card mt-3 p-3 p-md-4">
        <header>
          <button type="button" className="btn btn-light my-3 mt-md-0">
            <span className="text-primary me-2">&#10094;</span>
            <strong className="text-uppercase">voltar</strong>
          </button>
        </header>
        <div className="d-flex flex-column flex-lg-row gap-lg-4">
          <section className="w-100">
            <div className="d-grid border rounded mb-3">
              <div className="col-md-6 col-lg-8 mx-auto p-3">
                <img src={productImg} alt="product name" className="w-100" />
              </div>
            </div>
            <article className="d-flex flex-column flex-md-row flex-lg-column">
              <h3 className="col-md-6 col-lg-12 me-md-5 me-lg-0">
                Computador Desktop - Intel Core i7
              </h3>
              <ProductPrice price={2779} />
            </article>
          </section>
          <section className="border rounded p-3 text-black-50 mt-3 mt-lg-0 col-lg-6">
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
