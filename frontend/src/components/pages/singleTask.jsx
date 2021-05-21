import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

class SingleTask extends Component {
    state = {  }
    editProduct = (p)=>{
        console.log('edit', p)
        this.props.history.replace(`/productform/${p.id}`)
    }
    render() { 
        // console.log('single task', this.props)   ;
        const t = this.props.todo
        console.log(t);
        return (  
            <>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.done}</td>
                <td>
                    <i className="fas fa-edit" onClick={()=>this.editProduct(t)}></i>
                </td>
                <td><i className="far fa-trash-alt"></i></td>
                
            </>
        );
    }
}
 
export default SingleTask;