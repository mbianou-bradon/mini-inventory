import React from 'react'

type Props = {
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
    name?: string;
    isError?: boolean;
    error?: string;
    type?: string
}

export default function Input({ value, setValue, placeholder, name, isError, error, type }: Props) {
    return (
        <div className='w-full'>
            <input type={type} name={name} value={value} onChange={(e) => setValue?.(e.target.value)} placeholder={placeholder} className='border border-slate-500 rounded-lg px-4 py-2 w-full outline-none focus:border-primary-blue' />
            {isError && <span className='block text-red-500 text-sm mt-1'>{error}</span>}
        </div>
    )
}
