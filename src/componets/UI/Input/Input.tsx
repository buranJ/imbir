import "./input.scss"

function Input({ title, text, type, className, icon, value }) {
    return (
        <label htmlFor={type} className="input__label">{title}
            <div className="input__wrap">
                <input type={type} placeholder={text} defaultValue={value} className={`input__input ${className || ""}`} />
               {icon && <img src={icon} alt="icon" className="input__img" />}
            </div>
        </label>)
}
export default Input