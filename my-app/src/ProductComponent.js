import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { AddToCart } from './AddToCartComponent';

class Product extends Component {

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

    render() {
        const menu = this.state.products.map((product) => {
            return (
                <div key={product.id} className="col-md-4" style={{'padding-left':'34px'}} >
                    <div className="row">
                        <div className="card" style={{'margin-top':'10%'}}>
                            <div className="row" style={{'height':'150px','width':'450px'}}>
                                <div className="col-md-6">
                                    <img src={"http://localhost:8084/executed/gray.jpg"}  alt="Avatar" style={{"width":"94%","height":"93%","padding-left":"10px","padding-right":"10px"}}/>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <h5 >
                                            <i style={{'color':'gold'}} className="fa fa-star" aria-hidden="true"></i>
                                            <i style={{'color':'gold'}} className="fa fa-star" aria-hidden="true"></i>
                                            <i style={{'color':'gold'}} className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="row">
                                        <p>{'$'}{product.price}</p>
                                    </div>
                                    <div className="row">
                                        <AddToCart
                                            id={product.id}
                                            description={product.description}
                                            addToCart={this.addToCart.bind(this)}
                                        />
                                        {/* <button className="btn btn-primary" name="like" value={'{"id":'+product.id+',"press":""}'} ><i className="fa fa-shopping-cart" aria-hidden="true"></i> {'Add To Cart'}</button>                                     */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        
        return(
            <div className="row">
                {menu}
            </div>
        );
    }

}

export default Product;