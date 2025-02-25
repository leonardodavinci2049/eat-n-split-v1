import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
