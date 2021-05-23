import React, { Component } from 'react';

import Navbar from './navbar';
import { Redirect, Route, Switch } from 'react-router';


import NotFound from './pages/notFound';

import axios from 'axios';
import TodoList from './pages/todoList';
import TODOForm from './pages/todoForm';
import { toast } from 'react-toastify';

class App extends Component {
    state = { 
        todos:[]
        //     {id: 1, title: 'Web development', done:false},
        //     {id: 2, title: 'Web development', done:false},
        //     {id: 3, title: 'Web development', done:false}
        // ]
    }     
    APIURL='http://127.0.0.1:5000/todos'
    async componentDidMount(){
        const {data}  = await axios.get(this.APIURL)
        //console.log('get request', data);
        this.setState({todos: data})
    }

    handleDelete = async (t) => {
        const oldTodos = [...this.state.todos];
    
        //State
        //Clone
        //Edit 
        const todos = this.state.todos.filter((s) => s.id !== t.id);
        //Set state
        this.setState({ todos });
    
        try {
          //Call B
            await axios.delete( `${this.APIURL}/${t.id}` );
        } catch (ex) {
          toast("Cant Delete");
          this.setState({ todos: oldTodos });
        }
    };

    handleInsert = async(t) => {
        const oldTodos = [...this.state.todos];
    
        //State
        //Clone
        //Edit 
        const todos = this.state.todos.push(t)
        //Set state
        this.setState({ todos });

        // try {
        //     //Call B
        //     const obj = t
        //       await axios.post( `${this.APIURL}/${t.id}`, obj );
        //   } catch (ex) {
        //     toast("Cant Delete");
        //     this.setState({ todos: oldTodos });
    }



    cloneReturnSingle=(prod)=>{
        const prods = [...this.state.todos]
        const idx = prods.indexOf( prod)
        return prods[idx]
    }
    
    render() { 
        return ( 
            <>
            <Navbar
                numTODO={this.state.todos.length}/>
            <main className="container">
                <Switch>
                    <Route path='/todos' render={ (props) => 
                        <TodoList
                            {...props}
                            todos={this.state.todos}
                            onDelete={this.handleDelete}
                            onInsert={this.handleInsert}

                        />
                    }  />

                    <Route path='/todoform/:id' component={TODOForm} />
                    

                    <Route path='/notfound' component={NotFound} />
                    <Redirect to='/notfound'  />

                </Switch>

                {/*  */}
            </main>
            </>
        );
    }
}
 
export default App;