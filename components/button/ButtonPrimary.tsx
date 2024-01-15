import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonPrimary: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={`bg-black text-white py-3 px-8 rounded-2xl border border-black hover:text-black transition duration-700 hover:bg-white hover:shadow-md ${className}`}
      {...props}
    />
  );
};
