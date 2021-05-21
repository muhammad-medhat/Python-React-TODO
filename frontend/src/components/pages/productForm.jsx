import axios from 'axios';
import React, { Component } from 'react';
class ProductForm extends Component {
    APIURL = 'http://localhost:3000/products'
    state = { name: '', price: ''  }
    submitForm = (e)=>{
        e.preventDefault()
        const id = this.props.match.params.id
        if (this.validate()) {
            console.log('Submiting...', this.state)
            if(id !== 'new'){
                //Editing               
                this.editProduct()
            } else{
                //Adding
                this.addProduct()
            }
            this.props.history.replace('/admin')
            // 
        }
        
    }
    async componentDidMount(){
        const id = this.props.match.params.id
        if(id !== 'new'){
            const {data} = await axios.get(`${this.APIURL}/${id}`)
            this.setState({...data})
            console.log('state', this.state)
        }
    }
    handleChange = (e) =>{
        let st = {...this.state}
        // console.log('OnChange', e);
        // console.log('OnChange', st);
        st[e.currentTarget.name] = e.currentTarget.value        
        this.setState(st)
    }
    validate =  ()=>{return true}


    addProduct = async () => {
        const obj = {...this.state, nmbr: 0, inCart: false}
        await axios.post(this.APIURL, obj)
    }
    editProduct = async () => {
        const id = this.props.match.params.id

        const obj = {...this.state, nmbr: 0, inCart: false}
        delete obj.id
        await axios.patch(`${this.APIURL}/${id}`, obj)    }
    render() { 
        const id = this.props.match.params.id
        let title = ''
        if(id !== 'new'){
            console.log('props', this.props);
            title = `Edit Product (${id})`
            //this.setState({name:})
        } else{
            title = 'Add Product'
        }
        

        //const pName = (id === 'new')? '': 
        return ( 
            <>
                <h1>{title}</h1>

                <form>
                    <div class="form-group">
                        <label for="txtName">Product Name</label>
                        <input type="text" class="form-control"
                            id="txtName" 
                            name="name"
                            placeholder="Enter Name"
                            onChange={this.handleChange}
                            value={this.state.name}  />
                    </div>
                    <div class="form-group">
                        <label for="txtPrice">Price</label>
                        <input type="number" class="form-control" 
                            id="txtPrice" 
                            name="price" 
                            placeholder="Price"
                            onChange={this.handleChange}
                            value={this.state.price}  />

                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.submitForm}>Submit</button>
                </form>
            </>
          );
    }
}
 
export default ProductForm;