import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor: string;
}

export const Button = ({ bgColor, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-${bgColor} hover:brightness-90 hover:transition-all w-full min-h-12 rounded-lg `}
      {...rest}
    >
      {children}
    </button>
  );
};
