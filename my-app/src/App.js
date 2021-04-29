import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';
import { Button,
  Container,
  Modal,
  ModalTitle,
  ModalHeader,
  ModalBody,
  ModalFooter } from 'reactstrap';
import Product from './ProductComponent';
import NavbarComponent from './NavbarComponent';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          showModal: false,
          filterText: "",
          orders:[{
                id : "0001",
                orderDetails:[],
                subtotal: "0.00",
                total: "0.00"
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

        this.toggleModal = this.toggleModal.bind(this);

    }

    addToCart(event){
      event.preventDefault();

      let nextState = this.state.orders;

      // let today = moment(new Date()).format('YYYY-MM-DD');

      let parseId = JSON.parse(event.target.value);

      let newItem = {

          "id": parseId.id,
          "date": "04-28-2021",
          "description": parseId.description,
          "price": parseId.price
      }

      nextState[0].orderDetails.push(newItem);

      this.setState({
          orders: nextState
      });

      // console.log(this.state.orders);

    }

    deleteItem(event){

      event.preventDefault();

      let nextState = this.state.orders;

      // let parseId = JSON.parse(event.target.value);

      console.log(event.target.value);

      console.log(this.state.orders);

      // console.log(parseId)

      nextState[0].orderDetails.splice(0,1);

      // this.setState({
      //     orders: nextState
      // });


    }

    search(event){

      this.setState({
        filterText: event.target.value
      })

    }

    doCheckout(event){

      event.preventDefault();

      let nextState = this.state.orders;

      nextState[0].orderDetails = [];

      this.toggleModal();

      this.setState({
          orders: nextState
      });


    }

    toggleModal() {
      console.log("hello");
      this.setState({
        showModal: !this.state.showModal
      })
    }
  

    render(){
      
      return (
        <div className="App">
          <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
            <ModalHeader>
              <p>Transaction ID 00001</p>
            </ModalHeader>
            <ModalBody>
              Your checkout has been successfully completed.
            </ModalBody>
            <ModalFooter>  
              <button className="btn btn-white" onClick={this.toggleModal} >Close</button>
            </ModalFooter>
          </Modal>

          <NavbarComponent
            doCheckout={this.doCheckout.bind(this)}
            deleteItem={this.deleteItem.bind(this)}
            search={this.search.bind(this)}
            orders={this.state.orders}
          />  
          <Product
            filterText={this.state.filterText}
            orders={this.state.orders}
            products={this.state.products}
            addToCart={this.addToCart.bind(this)}
          />

        </div>
      );
  }
}

export default App;
