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
                <td>{t.name}</td>
                <td>{t.content}</td>
                <td>
                <input className="form-check-input" type="checkbox" value={t.done} id="flexCheckDefault" />

                </td>
                <td>
                    <i className="fas fa-edit" onClick={()=>this.editTODO(t)}></i>
                </td>
                <td><i className="far fa-trash-alt"></i></td>
                
            </>
        );
    }
}
 
export default SingleTask;