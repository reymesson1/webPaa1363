import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';

function NavbarComponent(props) {
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggle = () => setDropdownOpen(prevState => !prevState);  

        return(
            <div>
                <Navbar style={{'background-color':'#e6e6e6','height':'150px','color':'#000000'}}>
                    <div className="container">
                        <NavbarBrand style={{'color':'#000000'}} href="/"><img style={{'width':'100px'}} src="http://localhost:8084/testiiiing.jpg"/></NavbarBrand>
                    </div>
                    <Dropdown style={{ 'right':'18%'}} isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle style={{'background-color':'#e6e6e6', 'border-color':'#e6e6e6'}} caret>
                    {/* <i style={{'position':'absolute','left':'-25%','top':'22%','font-size':'20px'}} className="fa fa-shopping-cart" aria-hidden="true"></i>Cart */}
                    &nbsp;&nbsp;&nbsp;<i className="fa fa-shopping-cart" style={{'color':'#000000'}} aria-hidden="true"></i>&nbsp; <span style={{'font-size':'20px','color':'#000000'}}>Cart</span>
                    </DropdownToggle>
                    <DropdownMenu style={{'width':'350px'}} >
                        <DropdownItem header><h4>Cart</h4></DropdownItem>
                        <DropdownItem>
                        <div className="row">
                            <Table>
                            <tbody>
                                <tr>
                                <td>
                                    <span>test</span>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="row">
                                    <div className="col-md-4">
                                        <p className="col-md-offset-10">&nbsp;</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="col-md-offset-10">Subtotal:</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="col-md-offset-10">&nbsp;</p>
                                    </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                        <h5>&nbsp;</h5>
                                        </div>
                                        <div className="col-md-4">
                                        <h5>Total:</h5>
                                        </div>
                                        <div className="col-md-4">
                                        <h5>&nbsp;</h5>
                                        </div>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td>                                            
                                    {/* <button className="btn btn-dark" onClick={this.props.doCheckout.bind(this)} style={{'width':'100%'}} >Checkout</button> */}
                                    <button className="btn btn-dark" onClick={props.doCheckout.bind(this)} style={{'width':'100%'}}  >Checkout</button>
                                </td>
                                </tr>
                            </tbody>
                            </Table>
                        </div>
                        </DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </Navbar>
            </div>
        );
    }



export default NavbarComponent;