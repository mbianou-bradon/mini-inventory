import React from 'react'

type Props = {
    text: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    disable?: boolean;
    onClick?: () => void;
    styles?: string;
    type?: 'submit' | 'button'
}

export default function Button({ leftIcon, rightIcon, text, disable, onClick, styles, type }: Props) {
    return (
        <button type={type} disabled={disable} onClick={onClick} className={`rounded-lg font-bold bg-primary-blue text-white px-6 py-2 active:scale-[0.98] transition-all duration-200 ${styles}`}>
            <span>{leftIcon}</span><span>{text}</span><span>{rightIcon}</span>
        </button>
    )
}
