import productImg from 'assets/images/product.png';
import {ProductPrice} from 'components/ProductPrice/product-price';
import './product-card-styles.scss';

export const ProductCard = () => (
  <div className="base-card product-card">
    <div className="card-top-container">
      <img src={productImg} alt="Nome do produto" />
    </div>
    <div className="card-bottom-container">
      <h6>Computador Desktop - Intel Core i7</h6>
      <ProductPrice />
    </div>
  </div>
);
