import React from 'react';
import SingleProduct from './singleProduct';
import Cart from './cart';

const Menue = (props) => {
    // console.log('menue props', props)
    return (  
        <>
        <h1>Resturant Menue</h1>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">...</th>
                </tr>
            </thead>
            <tbody>
            {
                props.products.map( p => {
                    // {console.log('single product', p)}
                    return(
                        <tr key={p.id}>
                            {/* <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td><Cart product={{p}} onClick={props.onClick}/></td> */}
                            <SingleProduct 
                                {...props}
                                product={p} />
                        </tr>
                    )

                })
            }
            </tbody>
            </table>
        </>
    );
}
 
export default Menue;