import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/button/Button.atom';
import Input from './components/atoms/input/Input.atom';
import Dropdown from './components/atoms/dropdown/Dropdown.atom';
import WareHouseSelectorAndStock from './components/molecules/warehouse-selector-and-stock/WareHouseSelectorAndStock.molecule';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Button text='Add Input' />
      <Input name='Input' value='' placeholder='Place holder' isError error='this is an error message' />
      <Dropdown placeholder='This is a dropdown' />
      <WareHouseSelectorAndStock />
    </div>
  );
}

export default App;
