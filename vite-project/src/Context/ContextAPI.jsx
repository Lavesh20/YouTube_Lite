
import { createContext, useEffect, useState } from "react"
import {fetchDataFromAPI} from "../utils/API"

export const Context = createContext();

export const AppContext = (props)=>{
    const[loading,setLoading] = useState(false)
    const[searchResult,setSearchResult] = useState(false)
    const[selectCategories,setSelectCategories] = useState("New")
    const[mobileMenu,setMobileMenu] = useState(false)
    


useEffect(()=>{
    fetchSelectedCategoryData(selectCategories)
},[selectCategories])

const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${query}`)
      .then((response) => {
        const contents = response.data.contents; // Update this based on the actual response structure
        console.log(contents);
        setSearchResult(contents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setSearchResult(null); // Set to null in case of an error
        setLoading(false);
      });
  };

return (
     <Context.Provider
        value={{
        loading,
        setLoading,
        searchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
         
      }}>
       {props.children}
            </Context.Provider>
)
    }