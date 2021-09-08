import { useMediaQuery } from 'react-responsive';
import { TextButton } from './TextButton/textButton';
const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)',
  });
  return (
    <div className={`${isDesktopOrLaptop ? 'bg-white vh-100' : ''}`}>
      <nav
        className={`d-flex justify-content-around justify-content-sm-between my-3 my-lg-0 flex-lg-column ${
          isDesktopOrLaptop ? '' : 'gap-lg-3'
        }`}
      >
        <TextButton
          text="Produtos"
          isDesktopOrLaptop={isDesktopOrLaptop}
          link="/admin/products"
        />
        <TextButton
          text="Categorias"
          isDesktopOrLaptop={isDesktopOrLaptop}
          link="/admin/categories"
        />
        <TextButton
          text="Usuários"
          isDesktopOrLaptop={isDesktopOrLaptop}
          link="/admin/users"
        />
      </nav>
    </div>
  );
};

export default Navbar;
