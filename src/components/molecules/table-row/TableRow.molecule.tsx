import React from 'react'

type Props = {
    productName?: string;
    warehouse?: string;
    stock?: string;
    date?: string;
    onclick?: () => void
}

export default function TableRow({ productName = 'Banane', warehouse = 'Marche Ndokotti', stock = '20', date = '03/07/2024', onclick }: Props) {
    return (
        <tr className='[&>*]:py-3 hover:bg-slate-100' onClick={() => { onclick?.() }}>
            <td><div className='h-5 w-5 bg-slate-200 rounded-sm mx-4'></div></td>
            <td>{productName}</td>
            <td>{warehouse}</td>
            <td>{stock}</td>
            <td>{date}</td>
        </tr>
    )
}
