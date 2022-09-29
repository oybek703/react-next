import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appereance: 'primary' | 'ghost',
    children: ReactNode
}
