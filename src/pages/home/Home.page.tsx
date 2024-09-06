import React from 'react'
import Sidebar from '../../components/molecules/sidebar/Sidebar.organism'
import DashboardLayout from '../../components/organisms/dashboard-layout/DashboardLayout.organism'
import { magasins } from '../../data/magasin.data'
import { produits } from '../../data/produit.data'
import { getLStorage } from '../../lib/utils/localStorage.util'
import { Link } from 'react-router-dom'

export default function Home() {
    const inventaire = getLStorage('inventory')
    const ARRDATA = [
        {
            title: 'Inventaire',
            number: inventaire?.length || 0,
            link: '/inventory'
        },
        {
            title: 'Produit',
            number: produits.length,
            link: '/produit'
        },
        {
            title: 'Magasin',
            number: magasins.length,
            link: '/magasin'
        },
    ]
    return (
        <DashboardLayout>
            <div>
                <ul className='flex items-center gap-10 justify-around'>
                    {ARRDATA.map((item, index) => {
                        return <li key={index}>
                            <Link to={item.link} className='w-[200px] p-20 flex flex-col items-center justify-center rounded-xl gap-5 border shadow-primary-blue/40 shadow-inner'>
                                <h3 className='text-xl text-slate-800'>{item.title}</h3>
                                <p>{item.number}</p>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </DashboardLayout>
    )
}
