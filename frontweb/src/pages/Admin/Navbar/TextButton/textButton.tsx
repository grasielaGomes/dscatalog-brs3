import { NavLink } from "react-router-dom";



type Props = {
  text: string;
  isDesktopOrLaptop?: boolean;
  link: string;
};

export function TextButton({ text, isDesktopOrLaptop , link }: Props) {

  return (
    <NavLink
      to={link}
      activeClassName={`bg-primary bg-opacity-10 text-primary border border-primary`}
      className={`px-3 px-sm-5 py-2 ${
        isDesktopOrLaptop
          ? 'rounded-0 py-3 border-bottom border-0'
          : 'rounded-pill bg-secondary'
      } `}
    >
      <p className={`fw-bolder my-auto ${isDesktopOrLaptop ? 'mx-5' : ''}`}>
        {text}
      </p>
    </NavLink>
  );
}
