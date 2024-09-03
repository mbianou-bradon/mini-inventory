import React from 'react'

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
