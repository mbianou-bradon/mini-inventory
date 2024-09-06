import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='bg-slate min-h-screen max-w-[250px] w-full shadow-sm shadow-primary-blue/30'>
            <div className='p-10 shadow-primary-blue/20 shadow-sm'>
                <p className='text-primary-blue text-2xl font-bold cursor-pointer'>MiniInventory</p>
            </div>

            <ul className='flex flex-col gap-4 my-10 [&>li]:my-2 [&>li>a]:px-8 [&>li>a]:py-2 [&>li]:text-lg [&>li:hover]:bg-primary-blue [&>li:hover]:text-white'>
                <li>
                    <NavLink to={"/"} className={({ isActive }) => (isActive ? "bg-primary-blue text-white w-full" : "bg-transparent text-black w-full")}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/inventory"} className={({ isActive }) => (isActive ? "bg-primary-blue text-white w-full" : "bg-transparent text-black w-full")}>
                        Inventory
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/produit"} className={({ isActive }) => (isActive ? "bg-primary-blue text-white w-full" : "bg-transparent text-black w-full")}>
                        Produit
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/magasin"} className={({ isActive }) => (isActive ? "bg-primary-blue text-white w-full" : "bg-transparent text-black w-full")}>
                        Magasin
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
