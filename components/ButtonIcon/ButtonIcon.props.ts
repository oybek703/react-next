import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import up from './up.svg'
import close from './close.svg'
import menu from './menu.svg'

export const icons = {up, close, menu}

export type iconName = keyof typeof icons

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appereance: 'white' | 'primary',
    icon: iconName
}
