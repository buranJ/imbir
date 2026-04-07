import "./button.scss";

function Button({ children, color, bg, className }) {
  return <button className={`btn ${className}`} style={{ backgroundColor: bg, color: color }}>{children}</button>;
}

export default Button;
