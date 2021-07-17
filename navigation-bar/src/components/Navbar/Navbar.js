import React, {useState} from "react";
import MenuList from './MenuList';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const menuList = MenuList.map(({url, title}, index) => {
        return(
            <li key={index}>
                <NavLink exact to={url} activeClassName='active'>{title}</NavLink>
            </li>
        );
    });

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav>
            <div className='logo'>
                VPN <font>Lab</font>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked ? 'fa fa-times' :'fa fa-bars'}></i>
            </div>
            <ul className={clicked ? 'menu-list' : 'menu-list close'}>
                {menuList}
            </ul>
        </nav>
    );
}
export default Navbar;