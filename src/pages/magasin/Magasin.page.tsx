import React, { useState } from 'react'
import StoreIcon from '../../lib/assets/icons/Store.icon'
import DashboardLayout from '../../components/organisms/dashboard-layout/DashboardLayout.organism'
import Button from '../../components/atoms/button/Button.atom'
import { magasins } from '../../data/magasin.data'
import { Magasin } from '../../lib/types/magasin.type'

export default function MagasinPage() {
    /** State management */
    const [activeStore, setActiveStore] = useState<Magasin>({ nom: '', adresse: '', id: '' })
    return (
        <DashboardLayout>
            <div className='flex items-start gap-10'>
                <div className='w-fit'>
                    <ul className='flex divide-x-2 divide-y-2 items-center gap-4 flex-wrap'>
                        {
                            magasins.map((item, index) => {
                                return <li key={index} onClick={() => setActiveStore(item)} className='w-40 h-40 text-center flex flex-col items-center gap-2 justify-center hover:bg-primary-blue cursor-pointer p-2 rounded hover:shadow hover:text-white'>
                                    <StoreIcon className={'text-[35px]'} />
                                    <p className='text-sm'>{item.nom}</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
                {activeStore.id !== '' && <div className='bg-white w-[450px] h-full max-h-[50vh] rounded p-2 border shadow-inner shadow-slate-600/70'>
                    <div className='flex flex-col gap-2'>
                        <div className='w-full h-40 p-3 shadow-inner bg-white flex items-center justify-center rounded shadow-primary-blue/70'><StoreIcon className={'text-[70px]'} /></div>
                        <div className='py-3'>
                            <p><span className='font-bold text-sm'>Store Name:</span>{activeStore.nom}</p>
                        </div>

                        <div className='py-3'>
                            <p><span className='font-bold text-sm'>Store Location:</span>{activeStore.adresse}</p>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <Button text='Close' type='button' styles='text-white bg-red-700 rounded w-full' onClick={() => setActiveStore({ id: '', nom: '', adresse: '' })} />
                    </div>
                </div>}
            </div>
        </DashboardLayout>
    )
}
