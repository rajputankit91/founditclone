import React, { useContext, useState } from "react"
import "./leftHomePage.css";
import { useJobsContext } from "../../contexts/CardContext";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const LeftHomePage = () =>{
  
  const { state } = useJobsContext();
  const { jobList, searchText,selectText,selectedData = {} } = state;

  console.log(selectedData,"00000")

  const filteredJobList = jobList.filter((job) =>{
    let returnVal = true;
    Object.keys(selectedData).forEach((fieldName) =>{
      console.log(selectedData[fieldName],"jobbbbbb")
      if(!selectedData[fieldName].values.includes(job[fieldName]?.toLowerCase())){
        returnVal = false;
      }
    }) 

    return returnVal;
  })
    
  // console.log(filteredJobList,"filteredList")
  // const filteredJobList = jobList.filter(({jobRole,jobLocation}) => {

  //   return (
  //     (jobRole.toLowerCase().includes(selectedList.map((item) =>item.value.toLowerCase())) )       
  //   );
  // });

  // if((jobList.jobRole.toLowerCase().includes(selectedList.map((item) =>item.toLowerCase())) ) &&(jobLocation.toLowerCase().includes(selectedList.map((item) => item.toLowerCase())))){
  //   const filteredJobList = jobList.filter(({jobRole,jobLocation}) => {

  //     return (
  //       (jobRole.toLowerCase().includes(selectedList.map((item) =>item.toLowerCase())) ) ||(jobLocation.toLowerCase().includes(selectedList.map((item) => item.toLowerCase())))
        
  //     );
  //   });
  // }
  console.log(filteredJobList,"================")
  
  const newfilterList = (jobList,selectedList) =>{
    console.log(jobList)
  }  
  const [currentPage,setCurrentPage] = useState(1);
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredJobList.slice(firstIndex,lastIndex);
  const npage = Math.ceil(jobList.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  
  const prePage = () =>{
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }
  
  const changeCPage = (id) =>{
    setCurrentPage(id)
  }

  const nextPage = () =>{
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }
  
  const getCurrentData = (event) =>{
    console.log(event)
  }
  
  return (
    <div className="leftHome">
      <div className="jobAlertToggle">
        <label className="toggleText">Send me jobs for this search</label>
        <label className="toggleBtn">
          <input className="toggleInput" type="checkbox"></input>
        </label>
      </div>

      <div className="query-details-container">
        <div className="query-details">
          <p className="job-count">showing {filteredJobList.length} results for</p>
        </div>
      </div>

      {
        records.map((item,index) =>{
          return (
            <div key={index} id={item.id} className="cartContainer" onClick={getCurrentData}>
              <div className="cardContainer" >

                <div className="cartHeader">
                  <div className="headerContent">
                    <h3>{item.jobTitle}</h3>
                    <p>{item.companyName}</p>
                  </div>
                  <div className="bookmark">
                  </div>
                </div>

                <div className="cartBody">
                  <p>{item.jobRole}</p>
                  {
                    item && item.jobDetails.map((details,index) =>{
                      return(
                        <div className="bodyRow" key={index}>
                          <div className="iconContainer">
                            {details.icon}
                          </div>
                          <div className="details">{details.value}</div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="cartFooter">
                  <div className="placeAtLeft">
                    <div className="jobAddedTime">
                      <p className="timeText">{item.timeText}</p>
                    </div>
                  </div>
                  <div className="placeAtRight">
                    {
                      item.jobApply.map((method,index) =>{
                        return(
                          <div  key={index} className="cardApplyLabel">
                            {method}
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      {/* <div className="pagination"> */}
        <ul className="pagination">
          <li>
            <a href="#" onClick={prePage}><GrPrevious /></a>
          </li>
          {
            numbers.map((n,i) =>{
              return(
                <li className={`page-item ${currentPage === n ? "active" : ""}`} key={i}>
                  <a href="#" className="page-item" onClick={() =>changeCPage(n)}>{n}</a>
                </li>
              )
            })
          }
          <li>
            <a href="#" onClick={nextPage}><GrNext /></a>
          </li>
        </ul>
      {/* </div> */}
    </div>
  )
}

export default LeftHomePage;



// (job.jobTitle.toLowerCase().includes(searchText.toLowerCase()) || job.jobLocation.toLowerCase().includes(searchText.toLowerCase())) && (job.jobLocation.toLowerCase().includes(selectedList) || job.jobExperience.toLowerCase().includes(selectedList))