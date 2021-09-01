import Navbar from 'components/Navbar/navbar';
import Catalog from 'pages/Catalog/catalog';
import Home from 'pages/Home/home';
import { Admin } from 'pages/Admin/admin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);
