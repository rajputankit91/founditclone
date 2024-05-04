import React, { useContext,useReducer,useState } from "react";
import "./header.css";
import Input from "../../common components/input/Input";
import Button from "../../common components/button/Button";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { useJobsContext } from "../../contexts/CardContext";

const Header = () =>{
  const { state, dispatch } = useJobsContext();
  // console.log(state,"........");

  const handleSearch = (e) => {
    dispatch({ type: "SET_JOB_SEARCH", payload: e.target.value });
  };

  return (
    <div className="pg-wrapper header-wrap" id="headerDefault">
      <div className="inner-wrapper">
        <div className="contentDiv">
          <div className="leftHeader">
            <div className="logo-section">
                <img className="companyLogo" src="https://media.foundit.in/trex/public/theme_3/src/assets/images/header/companyLogo.svg"></img>
            </div>
            <div className="content-section">
              <div className="innerContent-section">
                <div className="group relative ">
                  <a className="jobs tag" href="/">Jobs</a>
                </div>
                <div className="group relative ">
                  <a className="services tag" href="/">Services</a>
                </div>
              </div>
            </div>
          </div>
          <div className="middleHeader">
            <form id="searchForm" className="relative grow">

              <div className="inner-middleHeader">
                <Input onChange={handleSearch} className="skillsAutoComplete" placeholder = "Search by jobs" type = "text" ></Input>
                <Input onChange={handleSearch} className="locationAutoComplete" placeholder = "Location" type = "text"></Input>  
                <Input onChange={handleSearch} className="experienceInput" placeholder = "Experience" type = "text" ></Input>
                <span className="dropdown-icon">
                  <IoIosArrowUp />
                </span>
                <Button className="search_Btn" >
                  <CiSearch />
                </Button>
              </div>
            </form>
          </div>

          <div className="rightHeader">
            <Button className="loginBtn"><FaRegUserCircle /> Login</Button>
            <Button className="registerBtn"><FaUserEdit /> Register</Button>
            <div className="hiddenBorder"></div>
            <Button className="employerlogin">Employers Login</Button>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Header;