import React from "react";
import "./home.css";
import LeftHomePage from "../../components/leftHomePage/LeftHomePage";
import RightHomePage from "../../components/rightHomePage/RightHomePage";
import Navbar from "../Navbar/Navbar.jsx";

import useFetch from "../../hooks/useFetch.jsx";

const Home = () =>{
  const {mainData,error,loading} = useFetch("../../../public/maindata.json",{})

  if(loading){
    return <h1>Loading...</h1>
  }
  
  if(error){
    return <h1>error</h1>
  }

  return (
    <div className ="srpContainer">
      <Navbar />
      <div className ="HomePage">
        <LeftHomePage />
        <RightHomePage />
      </div>
    </div>
  )
}

export default Home;