import React from 'react'
import Sidebar from '../../molecules/sidebar/Sidebar.organism'

type Props = {
    children: React.ReactNode
}
export default function DashboardLayout({ children }: Props) {
    return (
        <div>
            <Sidebar />
            <div>
                <div></div>
                {children}
            </div>
        </div>
    )
}
