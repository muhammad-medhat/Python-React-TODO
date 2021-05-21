import React, { Component } from 'react';
class ProducrDetails extends Component {
    state = {  }
    handleSave = () => {
        console.log('Saving...');
        this.props.history.push('/cart')
    }
    render() { 
        console.log(this.props.products)
        //const [products, history, location, match] = {...props}
        var p = this.props.products.find(c=>c.id == this.props.match.params.id)-[]
        // var p = this.props.products.find(c=>c.id === parseInt(this.props.match.params.id))
        console.log(p);  
        var ulContent=''
            for(const [k, v] of Object.entries(p)){
                ulContent += `<li>${k}: ${v}</li>`
            }
        return ( 
                <>
                    <h1>ProductDetails for: {this.props.match.params.id}</h1>
                    <ul>
                        {ulContent}
                    </ul>
                    <button onClick={this.handleSave} className="btn btn-primary">Save</button>
                </> 
                );
    }
}
 
export default ProducrDetails;


// const ProductDetails = (props) => {   
//                     {
//                         console.log(props.products)
//                         //const [products, history, location, match] = {...props}
//                         var p = props.products.find(c=>c.id == props.match.params.id)
//                         console.log(p);  
//                         var ulContent=''
//                             for(const [k, v] of Object.entries(p)){
//                                 ulContent += `<li>${k}: ${v}</li>`
//                             }
//                     }
//     return (    <>

//                     <h1>ProductDetails for: {props.match.params.id}</h1>
//                     <ul>
//                         {ulContent}

//                         {                      
//                         //   <li>{p.id}</li>
//                         // <li>{p.name}</li>
//                         // <li>{p.price}</li>
//                         // <li>{p.nmbr}</li>
//                         //     // {...p}
//                             // {p.map((k, v)=>{
//                             //     <li>{k}: {v}</li>
//                             // })
                            
//                         }
//                     </ul>
//                 </> 
//             );
// }
 
// export default ProductDetails;
