import React, { Component } from 'react';
import { Media } from 'reactstrap';

export class AddToCart extends Component {

    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div> 
                <button className="btn btn-primary" onClick={this.props.addToCart.bind(this)} name="like" value={'{"id":'+this.props.id +', "description":"'+ this.props.description + '", "user":"jperez"}'} ><i className="fa fa-shopping-cart" aria-hidden="true"></i> {'Add To Cart'}</button>
            </div>
        )
    }
}

export default AddToCart;