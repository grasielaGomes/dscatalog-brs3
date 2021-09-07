import './bullet-style.scss';

type Props = {
  page: string;
  isFilled?: boolean;
  isActive?: boolean;
};

export function Bullet({ page, isFilled = true , isActive = false}: Props) {
  return (
    <div
      className={`${
        isFilled
          ? `bg-${isActive ? 'primary' : 'secondary'} text-white`
          : `bg-transparent text-${isActive ? 'primary' : 'secondary'}`
      } rounded-circle bullet-container d-flex justify-content-center align-items-center`}
    >
      <span className="fw-bolder">{page}</span>
    </div>
  );
}
