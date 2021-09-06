import Navbar from 'components/Navbar/navbar';
import Catalog from 'pages/Catalog/catalog';
import Home from 'pages/Home/home';
import ProductDetail from 'pages/ProductDetail/product-detail';
import { Admin } from 'pages/Admin/admin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products" exact>
        <Catalog />
      </Route>
      <Route path="/products/:productId" exact>
        <ProductDetail />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);
