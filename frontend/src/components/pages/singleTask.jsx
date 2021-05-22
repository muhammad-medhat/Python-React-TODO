import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

class SingleTask extends Component {
    state = {  }
    editTODO = (t)=>{
        console.log('edit', t)
        this.props.history.replace(`/todoform/${t.id}/${t.title}`)
    }
    render() { 
        const t = this.props.todo
       // console.log(t);
        return (  
            <>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.done}</td>
                <td>
                    <i className="fas fa-edit" onClick={()=>this.editTODO(t)}></i>
                </td>
                <td><i className="far fa-trash-alt"></i></td>
                
            </>
        );
    }
}
 
export default SingleTask;