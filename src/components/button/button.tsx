import { SyntheticEvent, PropsWithChildren, FC } from "react";
import { styled } from "styled-components";

type ButtonProps = PropsWithChildren<{
  onClick?: (event?: SyntheticEvent<HTMLButtonElement>) => void;
}>;

export const Button = ({ children, onClick }: ButtonProps) => {
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  return (
    <StyledButton onClick={handleClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button``;