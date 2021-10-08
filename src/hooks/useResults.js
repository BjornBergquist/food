import { useState, useEffect } from "react";
import Yelp from "../api/Yelp";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState()

    const searchApi = async (searchTerm) => {
        console.log("Call search API");
        try{
            const response = await Yelp.get('/search',{params:{
                limit: 50,
                term: searchTerm,
                location: "göteborg"
            }})
            setResults(response.data.businesses)
            setErrorMessage(null)
        } 
        catch (error){
            setErrorMessage("Something went wrong.")
            // setResults([])
        }
    }

    useEffect(() => {
        searchApi("Vegetarian")
    }, [])

    return [searchApi, results, errorMessage]
}