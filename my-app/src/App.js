import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';
import Product from './ProductComponent';
import NavbarComponent from './NavbarComponent';

function App() {

  return (
    <div className="App">
      <NavbarComponent/>  
      <Product/>
    </div>
  );
}

export default App;
