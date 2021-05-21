import React, { Component } from 'react';
import Cart from './cart';

class SingleProduct extends Component {
    state = {  }
    render() { 
        // console.log('singleproduct', this.props);
        const p = this.props.product
        // console.log('product menue', p);
        return (  
            <>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{<Cart product={p} onClick={this.props.onClick} />}</td>
                
            </>
        );
    }
}
 
export default SingleProduct;