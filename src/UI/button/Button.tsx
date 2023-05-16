import React, {FC} from 'react'
import './button.scss'
import {colors} from '../colors'

export enum buttonVariants {
    white = 'white',
    blue = 'blue'
}

interface ButtonProps {
    variant: buttonVariants;
    children: string;
    draggable?: boolean
}

const Button: FC<ButtonProps> = ({variant, children}: ButtonProps, draggable = false) => {
    return (
        <div className="my-button" style={
            {
                backgroundColor: variant === buttonVariants.white ? 'white' : colors.primary,
                color: variant === buttonVariants.white ? 'black' : 'white'
            }}>
            <div>{children}</div>
        </div>
    )
}

export default Button