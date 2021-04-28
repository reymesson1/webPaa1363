import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Product from './ProductComponent';

function App() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="App">
        <Navbar style={{'background-color':'#e6e6e6','height':'150px','color':'#000000'}}>
          <div className="container">
            <NavbarBrand style={{'color':'#000000'}} href="/"><img style={{'width':'100px'}} src="http://localhost:8084/testiiiing.jpg"/></NavbarBrand>
          </div>
          <Dropdown style={{ 'right':'8%'}} isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle style={{'background-color':'#e6e6e6', 'border-color':'#e6e6e6'}} caret>
          {/* <i style={{'position':'absolute','left':'-25%','top':'22%','font-size':'20px'}} className="fa fa-shopping-cart" aria-hidden="true"></i>Cart */}
          &nbsp;&nbsp;&nbsp;<i className="fa fa-shopping-cart" style={{'color':'#000000'}} aria-hidden="true"></i>&nbsp; <span style={{'font-size':'20px','color':'#000000'}}>Cart</span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem text>Dropdown Item Text</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        </Navbar>
        <Product/>
    </div>
  );
}

export default App;
