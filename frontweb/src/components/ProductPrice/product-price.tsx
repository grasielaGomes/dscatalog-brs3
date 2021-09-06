import { formatPrice } from 'util/formatters';

type Props = {
  price: number;
};

export const ProductPrice = ({ price }: Props) => (
  <div className="row">
    <span className="col-auto text-black-50 pe-1">R$</span>
    <h3 className="col-auto text-primary px-0">{formatPrice(price)}</h3>
  </div>
);
