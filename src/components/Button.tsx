import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styleAdd?: string;
}

const Button = ({ children, onClick , styleAdd}: ButtonProps) => {
  return (
    <div className="flex justify-end mt-2 col-start-2">
      <button className={`btn-default ${styleAdd}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
