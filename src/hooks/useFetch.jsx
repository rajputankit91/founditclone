import { useEffect, useState } from "react";

function useFetch(url,options){
  const [mainData,setMainData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() =>{
    const fetchData = async() =>{
      try{
        const res = await fetch(url,options)
        const data = await res.json()
        setMainData(data)
      } catch (error){
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  },[]);

  return { mainData,loading,error};
}

export default useFetch;


// 


// import { useState, useEffect } from 'react';

// const useFetch = (url, options = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (url) {
//       fetchData();
//     }

//     // Cleanup function
//     return () => {
//       // Cleanup if necessary
//     };
//   }, [url, options]);

//   return { data, loading, error };
// };

// export default useFetch;