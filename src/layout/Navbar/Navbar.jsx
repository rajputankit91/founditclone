import React, { useEffect } from "react";
import "./navbar.css"
import navData from "../../../public/navdata.json"
import MenuItems from "../../components/MenuItems";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../common components/button/Button";
import { CiFilter } from "react-icons/ci";

const Navbar = () =>{

  return (
    <div className="navbar">
      <div class="headerOptionsFilter">
        <div class="optionSelected">
          <p>Job Search</p>
          {/* <IoIosArrowUp /> */}
          <IoIosArrowDown />
          <div class="xBorder"></div>
        </div> 
        <div class="options">
          <ul id="jobSearchDropdown">
            <a href="#" target="_self" disabled="disabled">
              <li class="active">
                Job Search
                <i class="mqfisrp-tick-mark"></i>
              </li>
            </a>
            <a href="/skillyst/assessments" target="_self">
              <li>
                Assessments
              </li>
            </a>
          </ul>
        </div>
        <div class="seperator"></div>
      </div>

      <ul className="menus">

        <Button className="quickApplyFilter selected" >Quick Apply</Button>
        {
          navData.map((item,index) =>{
            return (
              <MenuItems items={item} key={index} />
            )
          })
        }
        
        <Button className="quickApplyFilter selected" >
          All Filter
          <CiFilter />
        </Button>
        
      </ul>
    </div>
  )
}

export default Navbar;