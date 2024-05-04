import React, { useContext } from "react"
import "./rightHomePage.css";
import Button from "../../common components/button/Button";
import { useJobsContext } from "../../contexts/CardContext";

const RightHomePage = () =>{


  const { state } = useJobsContext();
  const { jobList, searchText,selectText } = state;

  return (
    <>
      <div id="srpJdContainerTop" className="srpJdContainer">
        <div className="dbJdSection" id="jdSection">
          <div className="jdHeader">
            <div className="leftSection">
              <div className="jdInfoSection">
                <div className="jdTitle">
                  <span>
                  {(jobList.length) ? jobList[0].jobTitle : ""}
                  </span>
                </div>
                <div className="jdCompanyName">
                  <p>
                  {(jobList.length) ? jobList[0].companyName : ""}
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="rightSection">
              <div className="btnFunctionality">
                <div className="applyBtnCont">
                {(jobList.length) ? <Button>
                  <p className="text">Quick Apply</p>
                </Button> : ""}
                  {/* {details? <Button >Quick Apply</Button> } */}
                </div>
              </div>
            </div>
          </div>

          <div className="jobDetailMenu">
            <ul>
              <li className="">Highlights</li>
              <li>Job Description</li>
              <li>More Info</li>
              <li>Recruiter Information</li>
            </ul>
          </div>

          {/*  */}
          <div className="jDBody">

            <div className="jobHighlight">
              <div className="highlightContent"></div>
              <div className="sendSimilarContent"></div>
            </div>

            <div className="jobDescriptionContainer">
              <div className="jobDescription">
                <div className="about-company">
                  <div className="jobDescheading">Job Description</div>
                  <p className="jobDescInfo">
                  {(jobList.length) ? jobList[0].job_Description[0] : ""}
                  </p>
                </div>
              </div>

            </div>

            <div className="jobDetail"></div>
            
            <div className="jobCompanyCard"></div>
            
            <div className="jobDetailFooter"></div>
            
          </div>
        </div>
      </div>
    </>
  )

}

export default RightHomePage;