import React from 'react'
import DashboardLayout from '../../components/organisms/dashboard-layout/DashboardLayout.organism'
import InventoryTable from '../../components/organisms/inventory-table/InventoryTable.organism'

export default function Inventory() {
  return (
    <DashboardLayout>
      <div>
        <InventoryTable />
      </div>
    </DashboardLayout>
  )
}
