import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
                }                
            ]
        }
    }

    render() {
        const menu = this.state.products.map((product) => {
            return (
                <div key={product.id}>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="row" style={{'height':'150px','width':'450px'}}>
                                <div className="col-md-6">
                                    <img src={"http://localhost:8084/executed/gray.jpg"}  alt="Avatar" style={{"width":"100%","height":"100%","padding-left":"10px","padding-right":"10px"}}/>
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
                                        {/* <button className="btn btn-warning" name="like" value={'{"id":'+product.id+',"press":""}'} ><i className="fa fa-shopping-cart" aria-hidden="true"></i> {'Add To Cart'}</button>                                     */}
                                        <button className="btn btn-primary" name="like" value={'{"id":'+product.id+',"press":""}'} ><i className="fa fa-shopping-cart" aria-hidden="true"></i> {'Add To Cart'}</button>                                    
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