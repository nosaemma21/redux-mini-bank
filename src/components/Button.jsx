import { Link } from "react-router-dom";

const Button = ({ type, onClick, name, button, link, to }) => {
  return (
    <>
      {button && (
        <button
          className={`${
            type === "primary"
              ? "primary"
              : type === "secondary"
              ? "secondary"
              : ""
          } button`}
          onClick={onClick}
        >
          {name}
        </button>
      )}
      {link && (
        <Link
          to={to}
          className={`${
            type === "primary"
              ? "primary"
              : type === "secondary"
              ? "secondary"
              : ""
          } button`}
        >
          {name}
        </Link>
      )}
    </>
  );
};

export default Button;
