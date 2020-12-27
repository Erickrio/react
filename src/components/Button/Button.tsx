import React from 'react'
import './Button.css'

declare interface ButtonProps{
    content?: string 
    onClick?: () => void //método(prop) qualquer que retorna void
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button className="AppButton"
    onClick={props.onClick}
    >
    { props.children || 'NameLess button'}
    </button>
}
//props.children - caatura tudo q está dentro no componente
export default Button