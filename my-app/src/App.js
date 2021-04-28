import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, NavDropdown } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function App() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
          <div >
              <Dropdown style={{'right':'100%'}} isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                Cart
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

          </div>
        </Navbar>
    </div>
  );
}

export default App;
