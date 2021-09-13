import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';
import { ProductPrice } from 'components/ProductPrice/product-price';
import ProductInfoLoader from 'pages/ProductDetail/ProductInfoLoader/productInfoLoader';

type UrlParams = {
  productId: string;
};

export const ProductDetail = () => {
  const { productId } = useParams<UrlParams>();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  return isLoading ? (
    <ProductInfoLoader />
  ) : (
    <div className="container">
      <main className="base-card mt-3 p-3 p-md-4">
        <header className="ms-n2 ms-sm-n1">
          <Link to="/products">
            <button type="button" className="btn btn-light my-3 mt-md-0">
              <span className="text-primary me-2">&#10094;</span>
              <strong className="text-uppercase">voltar</strong>
            </button>
          </Link>
        </header>
        <div className="d-flex flex-column flex-lg-row gap-lg-4 px-sm-2">
          <section className="w-100">
            <div className="d-grid border rounded mb-3">
              <div className="col-md-6 col-lg-8 mx-auto p-3">
                <img
                  src={product?.imgUrl}
                  alt={product?.name}
                  className="w-100"
                />
              </div>
            </div>
            <article className="d-flex flex-column flex-md-row flex-lg-column">
              <h3 className="col-md-6 col-lg-12 me-md-5 me-lg-0">
                {product?.name}
              </h3>
              <ProductPrice price={product?.price as number} />
            </article>
          </section>
          <section className="border rounded p-3 text-black-50 mt-3 mt-lg-0 col-lg-6">
            <h6>Descrição do produto</h6>
            <p className="mt-3">{product?.description}</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
