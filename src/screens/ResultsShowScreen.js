import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Yelp from '../api/Yelp'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')

    console.log(result);

    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    return (
        <View>
            <Text>Results Show</Text>
        </View>
    )
}

export default ResultsShowScreen

const styles = StyleSheet.create({})
