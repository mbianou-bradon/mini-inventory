import React from 'react'
import DashboardLayout from '../../components/organisms/dashboard-layout/DashboardLayout.organism'
import { produits } from '../../data/produit.data'

export default function Product() {
    return (
        <DashboardLayout>
            <div>
                <ul className='flex gap-5 flex-wrap'>
                    {produits.map((produit, index) => {
                        return <li key={index} className='flex flex-col items-center justify-center gap-2 shadow-inner shadow-primary-blue/40 px-8 py-2 rounded-xl'>
                            <h5>{produit.nom}</h5>
                            <p>{produit.prix}</p>
                        </li>
                    })}
                </ul>
            </div>
        </DashboardLayout>
    )
}
