import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import Yelp from '../api/Yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('')
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

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmitt={() => searchApi(term)}
            />
            {errorMessage && <Text>{errorMessage}</Text>}
            <Text>We have found {results.length} results.</Text>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})
