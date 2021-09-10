import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ProductCard } from 'components/ProductCard/product-card';
import Pagination from 'components/Pagination/pagination';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import { AxiosParams } from 'types/vendor/axiox';
import { BASE_URL } from 'util/requests';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };
    axios(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <main className="container">
      <header className="mt-4">
        <p className="fs-3 fw-bolder">Catálogo de produtos</p>
      </header>
      <section className="row justify-content-center justify-content-sm-start">
        {page?.content.map((product) => (
          <div key={product.id} className="col-auto col-sm-6 col-md-4 col-lg-3">
            <Link to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </section>
      <footer className="d-flex flex-row justify-content-center mt-4">
        <Pagination />
      </footer>
    </main>
  );
};

export default Catalog;
