import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/button/Button.atom';
import Input from './components/atoms/input/Input.atom';
import Dropdown from './components/atoms/dropdown/Dropdown.atom';
import WareHouseSelectorAndStock from './components/molecules/warehouse-selector-and-stock/WareHouseSelectorAndStock.molecule';
import CreateInventory from './components/organisms/create-inventory/CreateInventory.organism';

function App() {
  const [value, setValue] = useState<string>('')
  return (
    <div className="App">
      <CreateInventory />
    </div>
  );
}

export default App;
