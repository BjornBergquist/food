import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState('')

    console.log()

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmitt={() => console.log("Term was submitted")}
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})
