import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultsDetail = ({result}) => {
    return (
        <View>
            <Text>{result.name}</Text>
        </View>
    )
}

export default ResultsDetail

const styles = StyleSheet.create({})
