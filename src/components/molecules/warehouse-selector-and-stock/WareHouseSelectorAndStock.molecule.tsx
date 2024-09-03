import React from 'react'
import Dropdown from '../../atoms/dropdown/Dropdown.atom'
import Input from '../../atoms/input/Input.atom'
import Button from '../../atoms/button/Button.atom'
import { magasins } from '../../../data/magasin.data'

type Props = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function WareHouseSelectorAndStock({ value, setValue }: Props) {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-4'>
                <Dropdown data={magasins} value={value} setValue={setValue} placeholder='Select Magasin' />
                <Input />
            </div>

            <Button text='Add a warehouse' />
        </div>
    )
}
