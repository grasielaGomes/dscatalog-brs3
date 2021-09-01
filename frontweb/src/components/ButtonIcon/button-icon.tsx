import { Link } from 'react-router-dom';
import './button-icon-styles.scss';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <Link to="/products">
        <button className="btn btn-primary btn-text">
          INICIE AGORA SUA BUSCA
        </button>
        <button className="btn btn-icon">&#10095;</button>
      </Link>
    </div>
  );
};

export default ButtonIcon;
