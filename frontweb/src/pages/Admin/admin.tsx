import Navbar from './Navbar/navbar';
export const Admin = () => (
  <main className="container vh-100">
    <div className="d-flex flex-column flex-lg-row h-100">
      <section>
        <Navbar />
      </section>
      <section>
        <h1>Hello, Admin</h1>
      </section>
    </div>
  </main>
);