import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import Yelp from '../api/Yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const searchApi = async () => {
        const response = await Yelp.get('/search',{params:{
            limit: 50,
            term,
            location: "göteborg"
        }})
        setResults(response.data.businesses)
    }

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmitt={searchApi}
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results.</Text>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})
