import React ,{ Component} from 'react';
import SingleTask from './singleTask';

class TodoList extends Component {
    state = {  }
    addProduct = () =>{
        console.log(this.props)
        this.props.history.push('todoform/new')
    }
    // handleDelete = t=>{
    //     await axios.delete(`${this.APIURL}/${t.id}`)
    // }
    render() {         
        
        const props = this.props
        // console.log('props in todolist', props)
        return (  
        <>
        <h1>Todo List Page</h1>
        <button className="btn btn-primary"
            onClick={this.addProduct}
            >
            Add New Task </button>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Content</th>
                <th scope="col">...</th>
                <th scope="col">...</th>
                </tr>
            </thead>
            <tbody>
            {
                
                props.todos.map( t => {
                    // {console.log('single todo', t)}
                    return(
                        <tr key={t.id}>
                            <SingleTask
                                {...props}
                                // onDelete={()=>this.handleDelete(t)}
                                todo={t} />
                        </tr>
                    )

                })
            }
            </tbody>
            </table>
        </>
    );
    }
}
export default TodoList;