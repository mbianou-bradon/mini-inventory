import React from 'react'
import Dropdown from '../../atoms/dropdown/Dropdown.atom'
import Input from '../../atoms/input/Input.atom'
import Button from '../../atoms/button/Button.atom'
import { magasins } from '../../../data/magasin.data'

type Props = {
    value: Record<string, string>; // Record of magasin (warehouse) to stock value
    setValue: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export default function WareHouseSelectorAndStock({ value, setValue }: Props) {

    /** Function to update selected magasin */
    function handleMagasinChange(newMagasin: string) {
        setValue((prev) => {
            const newValue = { ...prev };
            newValue[newMagasin] = newValue[newMagasin] || '';
            return newValue;
        });
    };

    /** Function to update stockValue */
    const handleStockValueChange = (newStockValue: string) => {
        setValue((prev) => ({
            // ...prev,
            [Object.keys(value)[0]]: newStockValue,
        }));
    };


    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-4'>
                <Dropdown data={magasins} value={Object.keys(value)[0]} setValue={handleMagasinChange} placeholder='Select Magasin' />
                <Input value={value[value.magasin]} setValue={handleStockValueChange} placeholder='Enter stock value' />
            </div>

            {/* TODO: Add the possiblitiy to select multiple warehouses */}
            {/* <div className='w-fit'>
                <Button text='Add a warehouse' />
            </div> */}
        </div>
    )
}
