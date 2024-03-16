import { HTMLAttributes } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: string;
}

export const Input = ({ label, type = "text", ...rest }: InputProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-lg font-light" htmlFor={label}>
        {label}
      </label>
      <input
        className="w-full min-h-12 rounded-lg p-3 px-7 outline-none text-slate-950 placeholder:text-[#BCBEC0] text-sm "
        type={type}
        id={label}
        {...rest}
      />
    </div>
  );
};
