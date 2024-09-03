import React from 'react'
import TableRow from '../../molecules/table-row/TableRow.molecule'

export default function InventoryTable() {
    return (
        <table className='w-full bg-white'>
            <tr className='text-left [&>*]:py-3'>
                <th><div className='h-5 w-5 bg-slate-200 rounded-sm mx-4'></div></th>
                <th>Product Name</th>
                <th>Warehouse</th>
                <th>Stock</th>
                <th>Date</th>
            </tr>
            <tbody className='text-left'>
                {Array(10).fill(0).map((_v, index) => {
                    return <TableRow key={index} />
                })}
            </tbody>
        </table>
    )
}
