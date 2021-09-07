import { ProductCard } from 'components/ProductCard/product-card';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';

const Catalog = () => {
  const product: Product = {
    id: 2,
    name: 'Smart TV',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 2190.0,
    imgUrl:
      'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
    date: '2020-07-14T10:00:00Z',
    categories: [
      {
        id: 1,
        name: 'Livros',
      },
      {
        id: 3,
        name: 'Computadores',
      },
    ],
  };

  return (
    <main className="container">
      <header className="mt-4">
        <p className="fs-3 fw-bolder">Catálogo de produtos</p>
      </header>
      <section className="row justify-content-center justify-content-sm-start">
        <div className="col-auto col-sm-6 col-md-4 col-lg-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-auto col-sm-6 col-md-4 col-lg-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-auto col-sm-6 col-md-4 col-lg-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-auto col-sm-6 col-md-4 col-lg-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-auto col-sm-6 col-md-4 col-lg-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
