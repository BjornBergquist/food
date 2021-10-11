import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal //same as horizontal={true}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return <ResultsDetail result={item}/>
                }}
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: "bold",
    }
})
