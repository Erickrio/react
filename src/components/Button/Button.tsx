import React from 'react'
import './Button.css'

declare interface ButtonProps{
    content?: string 
    //propriedade opcional
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button className="AppButton">
    { props.content || 'NameLess button'}
    </button>
}

export default Button