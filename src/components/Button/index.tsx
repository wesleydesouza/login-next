import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type ButtonColor = "primary" | "white";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor: ButtonColor;
}

const ClassButton = {
  primary:
    "bg-primary hover:brightness-90 hover:transition-all w-full min-h-12 rounded-lg",
  white:
    "bg-white text-white hover:brightness-90 hover:transition-all w-full min-h-12 rounded-lg",
};

export const Button = ({ bgColor, children, ...rest }: ButtonProps) => {
  return (
    <button className={`${ClassButton[bgColor]}`} {...rest}>
      {children}
    </button>
  );
};
