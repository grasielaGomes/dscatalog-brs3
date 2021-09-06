import { Link } from 'react-router-dom';
import './button-icon-styles.scss';

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => {
  return (
    <div className="btn-container">
      <Link to="/products">
        <button className="btn btn-primary btn-text">
          {text}
        </button>
        <button className="btn btn-icon">&#10095;</button>
      </Link>
    </div>
  );
};

export default ButtonIcon;
