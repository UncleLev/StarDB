import './header.css'

import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render(){
        return (

            <header className="header container">
                <nav className="nav">
                    <Link to="/" className="logo">Star DB</Link>
                    <ul className=" nav-list text-success">
                        <li className="nav-item nav-item">
                            <Link to="/people">People</Link>
                        </li>
                        <li className="nav-item nav-item">
                            <Link to="/planets">Planets</Link>
                        </li>
                        <li className="nav-item nav-item">
                            <Link to="/starships">Starships</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
};