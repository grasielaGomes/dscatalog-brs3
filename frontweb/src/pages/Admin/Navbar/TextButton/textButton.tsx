type Props = {
  text: string;
  isActive?: boolean;
};

export function TextButton({ text, isActive = false }: Props) {
  return (
    <a
      href="link"
      className={`${
        isActive ? 'bg-primary bg-opacity-10 text-primary' : 'bg-secondary text-black-50'
      } px-3 px-sm-5 py-2 rounded-pill`}
    >
      <p className="fw-bolder my-auto">{text}</p>
    </a>
  );
}
