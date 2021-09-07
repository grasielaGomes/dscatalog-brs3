import {TextButton} from './TextButton/textButton';
const Navbar = () => {
  return (
    <nav className="d-flex justify-content-around justify-content-sm-between my-3">
      <TextButton text="Produtos" isActive={true}/>
      <TextButton text="Categorias" />
      <TextButton text="Usuários" />
    </nav>
  );
};

export default Navbar;