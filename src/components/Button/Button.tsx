import { ReactNode } from "react";

type ButtonType = {
  type?: "default" | "outline";
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

export const Button = ({
  type = "default",
  children,
  className,
  onClick,
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`${className} transition ease-in-out delay-100 cursor-pointer text-center leading-normal align-center w-full uppercase py-3 text-sm border-blue border ${
        type === "outline"
          ? "text-blue bg-white hover:text-white hover:bg-blue"
          : "text-white bg-blue hover:text-blue hover:bg-white"
      } `}
    >
      {children}
    </button>
  );
};
