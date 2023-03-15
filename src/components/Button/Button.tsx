import classes from "./Button.styles";

export const Button = ({ type = "default", children, className }: any) => {
  return (
    <button
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
