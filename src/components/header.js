import React from 'react'
import './header.css'
import "react-toggle/style.css"
import {Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import City from './city/insex';


const Header = () => {
  return (
    <div className='container'>
     <nav className='navBar'>   
      <ul className='menuItems'>
      <IconContext.Provider value={{ className: "top-react-icons" }}>      
      <Link to="/province1/kathmandu">Kathmandu</Link>
      <Link to="/province1/bhaktapur">Bhaktapur</Link>
      <Link to="/province1/ilam">Illam</Link>
      <Link to="/province1/sikkim">Sikkim</Link>
        <li class="dropdown">
    {/* <a class="dropbtn"><MdArrowDropDown/></a>
    <div class="dropdown-content">
      <Link to="/Tab1">Province 1</Link>
      <Link to="/Tab2">Province 2</Link>
      <Link to="/Tab3">Province 3</Link>
    </div> */}
  </li>
      </IconContext.Provider>  
      </ul>  
    </nav> 
 
    </div>

   
  )
}

export default Header