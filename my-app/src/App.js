import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';
import Product from './ProductComponent';
import NavbarComponent from './NavbarComponent';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          orders:[{
                id : "0001",
                orderDetails:[],
                subtotal: "89.99",
                total: "99.99"
          }],
          products: [
            {
              id: 0,
              description:'Uthappizza',
              image: 'assets/images/uthappizza.png',
              category: 'mains',
              label:'Hot',
              price:'4.99',
              description:'A unique combination'                        
            },                
            {
              id: 1,
              description:'Uthappizza',
              image: 'assets/images/uthappizza.png',
              category: 'mains',
              label:'Hot',
              price:'4.99',
              description:'Italian pizza'                                                        
            },                
            {
              id: 2,
              description:'Uthappizza',
              image: 'assets/images/uthappizza.png',
              category: 'mains',
              label:'Hot',
              price:'4.99',
              description:'Vidalia onion'                        
            },                
            {
              id: 3,
              description:'Uthappizza',
              image: 'assets/images/uthappizza.png',
              category: 'mains',
              label:'Hot',
              price:'4.99',
              description:'Vidalia onion'                        
            },                
            {
              id: 4,
              description:'Uthappizza',
              image: 'assets/images/uthappizza.png',
              category: 'mains',
              label:'Hot',
              price:'4.99',
              description:'Vidalia onion'                        
            },                
            {
              id: 5,
              description:'Uthappizza',
              image: 'assets/images/uthappizza.png',
              category: 'mains',
              label:'Hot',
              price:'4.99',
              description:'Vidalia onion'                        
            },                
            {
              id: 6,
              description:'Uthappizza',
              image: 'assets/images/uthappizza.png',
              category: 'mains',
              label:'Hot',
              price:'4.99',
              description:'Vidalia onion'                        
            },                
            {
              id: 7,
              description:'Uthappizza',
              image: 'assets/images/uthappizza.png',
              category: 'mains',
              label:'Hot',
              price:'4.99',
              description:'Vidalia onion'                        
            }                
          ]
        }
    }

    addToCart(event){
      event.preventDefault();

      let nextState = this.state.orders;

      // let today = moment(new Date()).format('YYYY-MM-DD');

      let parseId = JSON.parse(event.target.value);

      let newItem = {

          "id": parseId.id,
          "date": "04-28-2021",
          "description": parseId.description
      }

      nextState[0].orderDetails.push(newItem);

      this.setState({
          orders: nextState
      });

      console.log(this.state.orders);

    }

    doCheckout(event){

      event.preventDefault();

      console.log(this.state.orders);

      console.log('checkout');

    }

    render(){
      
      return (
        <div className="App">
          <NavbarComponent
            doCheckout={this.doCheckout.bind(this)}
            orders={this.state.orders}
          />  
          <Product
            orders={this.state.orders}
            products={this.state.products}
            addToCart={this.addToCart.bind(this)}
          />
        </div>
      );
  }
}

export default App;
