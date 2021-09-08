


type Props = {
  text: string;
  isActive?: boolean;
  isDesktopOrLaptop?: boolean;
};

export function TextButton({ text, isActive = false, isDesktopOrLaptop }: Props) {

  return (
    <a
      href="link"
      className={`${
        isActive
          ? 'bg-primary bg-opacity-10 text-primary'
          : `bg-${isDesktopOrLaptop ? 'white' : 'secondary'} text-black-50`
      } px-3 px-sm-5 py-2 ${
        isDesktopOrLaptop ? 'rounded-0 py-3 border-bottom w-100' : 'rounded-pill'
      } `}
    >
      <p className="fw-bolder my-auto">{text}</p>
    </a>
  );
}
