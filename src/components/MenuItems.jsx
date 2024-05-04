import React, { useState } from "react";
import Dropdown from "../common components/dropdown/Dropdown";
import "./menuItems.css";
import { IoIosArrowDown } from "react-icons/io";

const MenuItems = ({items}) =>{
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () =>{
    setDropdown((prev) =>!prev)
  }

  return(
    <li className="menu-items">
      {
        items.submenu ? (
          <>
            <button className="filter-pill" type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={handleClick}>
              {items.title}
              <IoIosArrowDown />
  
            </button>
            <Dropdown submenus={items.submenu} data={items} dropdown = {dropdown}/>
          </>

        ) : (
          <a href={items.url}>{items.title}</a>
        )
      }
    </li>
  )
}

export default MenuItems;