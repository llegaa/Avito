import {ButtonHTMLAttributes, ReactNode} from "react";
export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}