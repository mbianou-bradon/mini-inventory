import React from 'react'
import Dropdown from '../../atoms/dropdown/Dropdown.atom'
import Input from '../../atoms/input/Input.atom'
import Button from '../../atoms/button/Button.atom'

export default function WareHouseSelectorAndStock() {
    return (
        <div>
            <div className='flex items-center gap-4'>
                <Dropdown />
                <Input />
            </div>

            <Button text='Add a warehouse' />
        </div>
    )
}
