import React, { Component } from 'react';
class Cart extends Component {
    state = {  }
    render() { 
        // console.log('cart component', this.props);

        const product = this.props.product
        const cssStyle = (product.inCart==true) ? {color:'#00f'}: {color:'#000'} 

        return ( 
            <>
                <i 
                    className="fas fa-cart-plus btn" 
                    onClick={()=>{this.props.onClick(this.props.product)}}
                    style={cssStyle}></i>
            </>

        );
    }
}
 export default Cart;

