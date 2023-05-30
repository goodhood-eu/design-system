import { PropsWithChildren, FC } from "react";

type TextProps = PropsWithChildren<{}>;

export const Text: FC<TextProps> = ({ children }) => (
  <p>{children}</p>
);
