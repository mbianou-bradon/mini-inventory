import React from 'react'
import Input from '../../atoms/input/Input.atom'
import Button from '../../atoms/button/Button.atom'
import Dropdown from '../../atoms/dropdown/Dropdown.atom'
import WareHouseSelectorAndStock from '../../molecules/warehouse-selector-and-stock/WareHouseSelectorAndStock.molecule'

export default function CreateInventory() {
    return (
        <form>
            <div>
                <label htmlFor=""></label>
                <Input />
            </div>
            <div>
                <label htmlFor=""></label>
                <Dropdown />
            </div>

            {/* Selection de magasin et stock */}
            <WareHouseSelectorAndStock />

            <div>
                <Button text='Save' />
                <Button text='Cancel' type="button" styles='bg-slate-400 text-slate-700' />
            </div>
        </form>
    )
}
