// import { ReactNode, ButtonHTMLAttributes } from "react";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const PrimaryButton = ({
  children,
  className,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={
        `px-4 py-3 rounded-xl bg-primaryColor text-secondaryColor transition font-medium hover:bg-transparent hover:text-primaryColor border hover:border-primaryColor ` +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
