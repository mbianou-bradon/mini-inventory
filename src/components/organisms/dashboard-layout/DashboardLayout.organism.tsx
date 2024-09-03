import React from 'react'
import Sidebar from '../../molecules/sidebar/Sidebar.organism'

type Props = {
    children: React.ReactNode
}
export default function DashboardLayout({ children }: Props) {
    return (
        <div className='flex items-start gap-2 w-full'>
            <Sidebar />
            <div className='w-full'>
                <div></div>
                <div className='p-6 shadow-inner shadow-primary-blue/50'>
                    {children}
                </div>
            </div>
        </div>
    )
}
