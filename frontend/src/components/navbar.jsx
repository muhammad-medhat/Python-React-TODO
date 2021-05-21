import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Navbar extends Component {
    state = {  }
    render() { 
        //console.log('navbar props ', this.props)

        return (  
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1 m-2">Logo</span>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto m">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/todos">Todos List</NavLink>
                            </li>
                            <li className="nav-item">
                                {
                                    
                                    <span className="badge btn-primary">
                                        <i className="fas  fa-tasks"></i>
                                        {this.props.numTODO}
                                    </span>
                                }
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/main">Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li> */}
                        </ul>
                    </div>
                    
                </nav>
            </>
        );
    }
}
 
export default Navbar;