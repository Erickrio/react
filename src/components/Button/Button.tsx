import React from 'react'
import './Button.css'

declare interface ButtonProps{
    content?: string 
    //propriedade opcional
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button className="AppButton"
    onClick={window.alert}>
    { props.content || 'NameLess button'}
    </button>
}

export default Button