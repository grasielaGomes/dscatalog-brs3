import './button-icon-styles.scss';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary btn-text">
        INICIE AGORA SUA BUSCA
      </button>
      <button className="btn btn-icon">&#10095;</button>
    </div>
  );
};

export default ButtonIcon;