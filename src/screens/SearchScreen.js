import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    console.log(results)

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmitt={() => searchApi(term)}
            />
            {errorMessage && <Text>{errorMessage}</Text>}
            <Text>We have found {results.length} results.</Text>
            <ResultsList title="Cost Effective" />
            <ResultsList title="Bit Pricier" />
            <ResultsList title="Big Spender" />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})
