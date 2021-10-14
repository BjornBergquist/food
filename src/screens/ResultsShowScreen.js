import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
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

    if (!result) {
        return null
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image source={{uri: item}} style={styles.image}/>
                }}
            
            />
        </View>
    )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    }
})
