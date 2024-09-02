import React, { useState } from 'react'

type Props = {
    value?: string;
    placeholder?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>
    data?: any[];
}
export default function Dropdown({ value, placeholder, setValue }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className={`relative border border-slate-500 rounded-lg px-4 py-2 w-full outline-none focus:border-primary-blue`}>
            <p onClick={() => setIsOpen(p => !p)} className='px-4 py-2 text-lg leading-[22px]'><span>{(value && value !== "") ? value : placeholder}</span><span></span></p>
            {isOpen && <ul className='border border-slate-500 rounded-lg absolute left-0 top-[110%] w-full  max-h-[200px] overflow-auto'>
                {Array(4).fill(0).map((_v, index) => {
                    return <li key={index} onClick={() => setValue?.("")} className={`hover:bg-primary-blue hover:text-white py-2 px-4 cursor-pointer`}>Data</li>
                })}
            </ul>}
        </div>
    )
}
