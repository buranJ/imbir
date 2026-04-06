import "./button.scss";

function Button({ children, color, bg }) {
  return <button className="btn" style={{ backgroundColor: bg, color: color }}>{children}</button>;
}

export default Button;
