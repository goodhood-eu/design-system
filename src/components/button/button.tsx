import { SyntheticEvent, PropsWithChildren, FC } from "react";

type ButtonProps = PropsWithChildren<{
  onClick?: (event?: SyntheticEvent<HTMLButtonElement>) => void;
}>;

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};
