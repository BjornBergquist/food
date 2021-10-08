import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

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
