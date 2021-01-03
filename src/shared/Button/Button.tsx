import React from 'react'
import './Button.css'

declare interface ButtonProps{
    content?: string 
    onClick?: () => void 
    appendIcon?: JSX.Element //opcional - corrige erro de property is missing type
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button className="AppButton"
    onClick={props.onClick}
    >
    { props.children || 'NameLess button'}
    { props.appendIcon }
    </button>
}
//props.children - caatura tudo q está dentro no componente
export default Button