import React ,{ Component} from 'react';
import SingleTask from './singleTask';

class TodoList extends Component {
    state = {  }
    addProduct = () =>{
        console.log(this.props)
        this.props.history.push('productform/new')
    }
    render() {         
        
        const props = this.props

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
                <th scope="col">Price</th>
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