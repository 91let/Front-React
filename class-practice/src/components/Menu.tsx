import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends React.Component{
    render(){
        return(
            <div className="TopMenu">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/Lists">Go Lists</Link>
                </div>
            </div>
        )
    }
}

export default Menu;