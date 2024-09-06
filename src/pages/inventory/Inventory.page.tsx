import React, { useState } from 'react'
import DashboardLayout from '../../components/organisms/dashboard-layout/DashboardLayout.organism'
import InventoryTable from '../../components/organisms/inventory-table/InventoryTable.organism'
import Button from '../../components/atoms/button/Button.atom'
import CreateInventory from '../../components/organisms/create-inventory/CreateInventory.organism'

export default function Inventory() {
  const [isCreating, setIsCreating] = useState<boolean>(false)
  return (
    <DashboardLayout>
      <div>
        <div className='w-full flex items-center justify-end gap-3 my-5'>
          <Button text='Add Item' onClick={() => setIsCreating(true)} />
          <div className='px-4 py-2 rounded bg-primary-blue/20 text-primary-blue font-bold'>
            <p>Export</p>
          </div>
        </div>
        <InventoryTable />
        {isCreating && <CreateInventory closeModal={setIsCreating} />}
      </div>
    </DashboardLayout>
  )
}
