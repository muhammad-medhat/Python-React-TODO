import React, { Component } from 'react';

import ShoppingCart from './shoppingCart';
import Navbar from './navbar';
import { Redirect, Route, Switch } from 'react-router';


import ProductDetails from './pages/productDetails';
import NotFound from './pages/notFound';
import Menue from './pages/menue';

import Login from './login';
import axios from 'axios';
import TodoList from './pages/todos';
import TODOForm from './pages/todoForm';

class App extends Component {
    state = { 
        todos:[
            {id: 1, title: 'Web development', done:false},
            {id: 2, title: 'Web development', done:false},
            {id: 3, title: 'Web development', done:false}
        ]
    }     
    APIURL='http://localhost:3000/todos'
    async componentDidMount(){
        // const {data}  = await axios.get(this.APIURL)
        // this.setState({products: data})

    }
    deleteProduct = async(pr) => {
        // await axios.delete(`${this.APIURL}/${pr.id}`)
    }
    toggleCart = (pr) => {
        // console.log('add to cart...', pr);
        // const prods = [...this.state.todos]
        // const idx = prods.indexOf( pr)
        // const prod = prods[idx]
        // prod.inCart = !pr.inCart
        // this.setState({products: prods})
    }

    decHandler = (prod) => {
        // const prods = [...this.state.todos]
        // const idx = prods.indexOf( prod)
        // const p = prods[idx]
        // // console.log(p);
        // p.nmbr--
        // this.setState({products: prods})
        // console.log('dnc',prods)
    }
    incHandler = (prod) => {
        // console.log('increase', prod);
        // const prods = [...this.state.todos]
        // const idx = prods.indexOf( prod)
        // const p = prods[idx]
        // // console.log(p);
        // p.nmbr++
        // this.setState({products: prods})
        // console.log('inc',prods)
    }
    deleteProduct = (p) =>{
        // console.log('Deleting', p);
        // const newProducts = this.state.todos.filter(pr => pr.id!== p.id)
        // this.setState({products: newProducts})
    }
    reset = () => {
        // console.log('reset');
        // let products = [...this.state.todos]
        // console.log('pppp bef',products);

        // products =  products.map(p=>{
        //     p.nmbr = 0
        //     return p
        // })
        // console.log('pppp aft',products);
        // this.setState({products})
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