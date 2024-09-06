import React, { useState } from 'react'
import ChevronIcon from '../../../lib/assets/icons/Chevron.icon';

type Props = {
    value?: string;
    placeholder?: string;
    setValue?: (value: string) => void
    data?: any[];
}
export default function Dropdown({ value, placeholder, setValue, data }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className={`relative border border-slate-500 rounded-lg px-4 py-2 w-full outline-none focus:border-primary-blue`}>
            <p onClick={() => setIsOpen(p => !p)} className={`px-4 text-base text-left cursor-pointer flex items-center justify-between w-full ${value && value !== "" ? 'text-black' : 'text-slate-400'}`}><span>{(value && value !== "") ? data?.filter(p => p.id === value)[0]['nom'] : placeholder}</span><span className={`${!isOpen && "rotate-[180deg]"} transition-all duration-200`}><ChevronIcon /></span></p>
            {isOpen && <ul className='border border-slate-500 rounded-lg absolute left-0 top-[110%] w-full  max-h-[200px] overflow-auto z-20 bg-white'>
                {data && data.map((item, index) => {
                    return <li key={index} onClick={() => setValue?.(item.id)} className={`hover:bg-primary-blue hover:text-white py-2 px-4 cursor-pointer ${value === item.id && 'bg-primary-blue text-white'}`}>{item.nom}</li>
                })}
            </ul>}
        </div>
    )
}
