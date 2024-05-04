import React from "react";
import "./dropdown.css";
import Input from "../input/Input";
import Button from "../button/Button";
import { CiSearch } from "react-icons/ci";
import { useJobsContext } from "../../contexts/CardContext";

const Dropdown = ({submenus,dropdown,data}) =>{
  const { state, dispatch } = useJobsContext();

  const handleFilter = (e) => {
    dispatch({ type: "SET_JOB_FILTER", payload: {value : e.target.value.toLowerCase(),fieldName:data.fieldName} });
  };

  console.log(submenus,"submenu")
  return(
    <>
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        <div className="searchbar">
          <CiSearch />
          <Input type="text" placeholder="search" ></Input>
        </div>
        
        {
          submenus.map((submenu,index) =>(
            <div className="checkbox" key={index}>
              <input type={data.type} value={submenu} name={submenu} id="filter" onClick={handleFilter}/>
              <label><span> {submenu} </span></label>
            </div>
          ))
        }
        <div>
          <Button className="resetBtn">Reset</Button>
          <Button className="applyBtn">Apply</Button>
        </div>
      </ul>
    </>
  )
}

export default Dropdown;