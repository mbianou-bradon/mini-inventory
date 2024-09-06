import React, { useState } from 'react'
import Input from '../../atoms/input/Input.atom'
import Button from '../../atoms/button/Button.atom'
import Dropdown from '../../atoms/dropdown/Dropdown.atom'
import WareHouseSelectorAndStock from '../../molecules/warehouse-selector-and-stock/WareHouseSelectorAndStock.molecule'
import { produits } from '../../../data/produit.data'
import { deleteLStorage, getLStorage, setLStorage } from '../../../lib/utils/localStorage.util'
import { Inventaire } from '../../../lib/types/inventaire.type'

export default function CreateInventory({ closeModal }: {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>

}) {
    const [produit, setProduit] = useState('');
    const [date, setDate] = useState('');
    const [magasinStockValue, setMagasinStockValue] = useState<Record<string, string>>({});

    function handleSaveInventory(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const inventory: Inventaire[] = getLStorage('inventory');
        if (inventory) {
            deleteLStorage('inventory');
            setLStorage('inventory', [...inventory, {
                date: date,
                produitId: produit,
                stock: magasinStockValue
            }])

        } else {
            setLStorage('inventory', [{
                date: date,
                produitId: produit,
                stock: magasinStockValue
            }])
        }
    }

    return (
        <div className='fixed top-0 left-0 z-20 bg-black/70 min-h-screen w-full flex items-center justify-center'>

            <form onSubmit={handleSaveInventory} className='flex flex-col gap-10 w-full max-w-[800px] p-10 bg-white rounded-lg min-h-[350px]'>
                <h2 className='text-[30px] font-bold mb-[10px]'>Add an Entry</h2>
                <div className='flex items-center gap-10'>
                    <label htmlFor="" className='flex items-center gap-2'>Produit <span className='text-red-500'>*</span></label>
                    <Dropdown value={produit} setValue={setProduit} placeholder='Select Product' data={produits} />
                </div>
                <div className='flex items-center gap-10'>
                    <label htmlFor="" className='flex items-center gap-2'>Date <span className='text-red-500'>*</span></label>
                    <Input value={date} setValue={setDate} placeholder='Select date' type='date' />
                </div>

                {/* Selection de magasin et stock */}
                <div>
                    <label htmlFor="" className='flex items-center gap-2 mb-4'>Select Magasin and Stock <span className='text-red-500'>*</span></label>

                    <WareHouseSelectorAndStock setValue={setMagasinStockValue} value={magasinStockValue} />
                </div>

                <div className='flex items-center gap-5 w-full justify-center'>
                    <Button text='Save' />
                    <Button text='Cancel' type="button" styles='bg-slate-200 text-slate-700' onClick={() => closeModal(false)} />
                </div>
            </form>
        </div>
    )
}
