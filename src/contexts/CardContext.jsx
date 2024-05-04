// import { createContext, useContext, useEffect, useReducer,useState } from "react";

// const { createContext } = require("react");

// export const TaskContext = createContext();
// export const TaskDispatchContext = createContext();

// export function TasksProvider({children}){
//   const [tasks,dispatch] = useReducer(tasksReducer,initailaTasks);

//   const [appData,setData] = useState();

//   useEffect(() =>{
//     fetch("../../public/maindata.json")
//     .then((response) =>{
//       return response.json();
//     })
//     .then((data) =>{
//       setData(data);
//     })
//   },[])

//   return (
//     <TaskContext.Provider value={{appData,tasks}}>
//       <TaskDispatchContext.Provider value={dispatch}>
//         {children}
//         {console.log(children)};
//       </TaskDispatchContext.Provider>
//     </TaskContext.Provider>
//   )
// }

// function tasksReducer(tasks,action){
//   console.log(action,"task=======")
//   switch (action.type){
//     case "search":{
//       return [...tasks];
//     }
//     default: {
//       throw Error("error")
//     }
//   }
// }

// const initailaTasks = [];
//
// export const CardProvider = ({children}) =>{
//   const [appData,setData] = useState();
//
//   useEffect(() =>{
//     fetch("../../public/maindata.json")
//     .then((response) =>{
//       return response.json();
//     })
//     .then((data) =>{
//       setData(data);
//     })
//   },[])

//   console.log(appData)

//   return (
//     <CardContext.Provider value={appData}>
//       {/* <CardDispatchContext.Provider value={""}> */}
//         {children}
//       {/* </CardDispatchContext.Provider> */}
//     </CardContext.Provider>
//   )
// }

// export const useTasks = () =>{
//   return useContext(CardContext);
// }

// export const useTasksDispatch = () =>{
//   return useContext(CardDispatchContext)
// }

// function tasksReducer(tasks,action){
//   switch (action.type){
//     case "search":{
//       return [...tasks]
//     }
//     default:
//       return tasks;
//   }
// }

// const initialTasks = [data];

// ============================================

import React, { createContext, useReducer, useEffect, useContext } from "react";

const initialState = {
  jobList: [],
  searchText: "",
  selectText: "",
  selectedData: {},
};

export const JobsContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_JOB_LIST":
      return { ...state, jobList: action.payload };
    case "SET_JOB_SEARCH":
      return { ...state, searchText: action.payload };
    case "SET_JOB_FILTER": {
      let updatedSelectedData;
      const currentSelectedData = state.selectedData[action.payload.fieldName];
      if (currentSelectedData) {
        const values = [...currentSelectedData.values, action.payload.value];
        updatedSelectedData = {
          ...state.selectedData,
          [action.payload.fieldName]: {
            values: values,
          },
        };
      } else {
        updatedSelectedData = {
          ...state.selectedData,
          [action.payload.fieldName]: {
            values: [action.payload.value],
          },
        };
      }

      return { ...state, selectedData: updatedSelectedData };
      // const updatedSelectedData = {
      //   ...state.selectedData,
      //   [action.payload.fieldName]:state.selectedData[action.payload.fieldName] == undefined ? {values:[action.payload.value]} : {values}
      // };
      // const updatedState = {...state,};
      // return {...state,selectedList:[...state.selectedList,action.payload],}
    }
    default:
      return state;
  }
};

export const JobsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../public/maindata.json");
        const data = await response.json();
        dispatch({ type: "SET_JOB_LIST", payload: data });
      } catch (error) {
        console.error("Error fetching job list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <JobsContext.Provider value={{ state, dispatch }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobsContext = () => useContext(JobsContext);
