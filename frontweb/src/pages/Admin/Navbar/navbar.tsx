import { useMediaQuery } from 'react-responsive';
import {TextButton} from './TextButton/textButton';
const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)',
  });
  return (
    <div className={`${isDesktopOrLaptop ? 'vh-100 bg-white' : ''}`}>
      <nav
        className={`d-flex justify-content-around justify-content-sm-between my-3 my-lg-0 flex-lg-column ${
          isDesktopOrLaptop ? '' : 'gap-lg-3'
        }`}
      >
        <TextButton
          text="Produtos"
          isActive={true}
          isDesktopOrLaptop={isDesktopOrLaptop}
        />
        <TextButton text="Categorias" isDesktopOrLaptop={isDesktopOrLaptop} />
        <TextButton text="Usuários" isDesktopOrLaptop={isDesktopOrLaptop} />
      </nav>
    </div>
  );
};

export default Navbar;