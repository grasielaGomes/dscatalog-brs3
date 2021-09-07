import './bullet-style.scss';

type Props = {
  page: string;
  isFilled?: boolean;
};

export function Bullet({ page, isFilled = true }: Props) {
  return (
    <div
      className={`${
        isFilled ? 'bg-primary text-white' : 'bg-secondary text-primary'
      } rounded-circle bullet-container d-flex justify-content-center align-items-center`}
    >
      <span className="fw-bolder">{page}</span>
    </div>
  );
}
