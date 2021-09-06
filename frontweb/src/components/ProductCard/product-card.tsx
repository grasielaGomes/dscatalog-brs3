import { Product } from 'types/product';
import { ProductPrice } from 'components/ProductPrice/product-price';
import './product-card-styles.scss';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => (
  <div className="base-card product-card">
    <div className="card-top-container">
      <img src={product.imgUrl} alt={product.name} />
    </div>
    <div className="card-bottom-container">
      <h6>{product.name}</h6>
      <ProductPrice price={product.price}/>
    </div>
  </div>
);
