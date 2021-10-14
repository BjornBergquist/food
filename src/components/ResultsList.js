import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { FlatList } from 'react-native-gesture-handler'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({title, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal //same as horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default withNavigation(ResultsList)

const styles = StyleSheet.create({
    container:{
        marginBottom: 8,
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 16,
        marginBottom: 4,
    }
})
