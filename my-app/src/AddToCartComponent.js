import React, { Component } from 'react';
import { Media } from 'reactstrap';

export class AddToCart extends Component {

    constructor(props) {
        super(props);
    
    }

    addToCart(event){
        event.preventDefault();

        console.log(event.target.value);

    }


    render() {
        return (
            <div> 
                <button className="btn btn-primary" onClick={this.addToCart.bind(this)} name="like" value={'{"id":'+this.props.id+',"press":""}'} ><i className="fa fa-shopping-cart" aria-hidden="true"></i> {'Add To Cart'}</button>                                                    
            </div>
        )
    }
}

export default AddToCart;