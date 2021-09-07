import Navbar from './Navbar/navbar';
export const Admin = () => (
  <main className="container">
    <div className="d-flex flex-column flex-lg-row">
      <section>
        <Navbar />
      </section>
      <section>
        <h1>Hello, Admin</h1>
      </section>
    </div>
  </main>
);