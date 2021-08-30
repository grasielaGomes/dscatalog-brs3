import Navbar from 'components/Navbar/navbar';
import { ProductCard } from 'components/ProductCard/product-card';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="row justify-content-center justify-content-sm-start">
          <div className="col-auto col-sm-6 col-md-4 col-lg-3">
            <ProductCard />
          </div>
          <div className="col-auto col-sm-6 col-md-4 col-lg-3">
            <ProductCard />
          </div>
          <div className="col-auto col-sm-6 col-md-4 col-lg-3">
            <ProductCard />
          </div>
          <div className="col-auto col-sm-6 col-md-4 col-lg-3">
            <ProductCard />
          </div>
          <div className="col-auto col-sm-6 col-md-4 col-lg-3">
            <ProductCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default Catalog;
