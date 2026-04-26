import "./input.scss"

function Input({title, text, type}) {
    return ( <label htmlFor={type} className="input__label">{title}<input type={type} placeholder={text} className="input__input"/></label>)
}
export default Input