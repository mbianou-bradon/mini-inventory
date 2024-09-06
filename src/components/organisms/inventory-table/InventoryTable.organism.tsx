import React, { useEffect, useState } from 'react'
import TableRow from '../../molecules/table-row/TableRow.molecule'
import { getLStorage } from '../../../lib/utils/localStorage.util'
import { Inventaire } from '../../../lib/types/inventaire.type'
import { produits } from '../../../data/produit.data'
import { magasins } from '../../../data/magasin.data'

export default function InventoryTable({ setData }: { setData?: React.Dispatch<React.SetStateAction<Inventaire>> }) {
    const [inventory, setInventory] = useState<Inventaire[]>([])
    useEffect(() => {
        const inventory = getLStorage('inventory');
        if (inventory) {
            setInventory(inventory);
            inventory.map((item: any) => {
                console.log(item.stock)
            })
        }
    }, [])
    return (
        <table className='w-full bg-white'>
            <tr className='text-left [&>*]:py-3'>
                <th><div className='h-5 w-5 bg-slate-200 rounded-sm mx-4'></div></th>
                <th>Product Name</th>
                <th>Warehouse</th>
                <th>Stock</th>
                <th>Date</th>
            </tr>
            {inventory.length > 0 ? <tbody className='text-left'>
                {inventory.map((element, index) => {
                    return <TableRow key={index} productName={produits.filter(p => p.id === element.produitId)[0]['nom']} date={element.date} stock={String(element.stock[Object.keys(element.stock)[0]])} warehouse={magasins.filter(wh => wh.id === Object.keys(element.stock)[0])[0]['nom']} onclick={() => {
                        setData?.(element)
                    }} />
                })}
            </tbody> : <p className='py-5 px-4 '>No Inventory element found!</p>}
        </table>
    )
}
