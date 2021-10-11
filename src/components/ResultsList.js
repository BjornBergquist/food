import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.results}>
                {results.length}
            </Text>
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
