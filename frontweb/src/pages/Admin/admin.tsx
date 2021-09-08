import { Route, Switch } from 'react-router';
import Navbar from './Navbar/navbar';
export const Admin = () => (
  <main className="container">
    <div className="d-flex flex-column flex-lg-row">
      <section>
        <Navbar />
      </section>
      <section>
        <Switch>
          <Route path="/admin/products">
            <h1>Product CRUD</h1>
          </Route>
          <Route path="/admin/categories">
            <h1>Category CRUD</h1>
          </Route>
          <Route path="/admin/users">
            <h1>User CRUD</h1>
          </Route>
        </Switch>
      </section>
    </div>
  </main>
);