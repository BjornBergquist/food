import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmitt}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                placeholder="Search" 
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmitt}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'hsl(0, 0%, 90%)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 16,
        flexDirection: 'row',
        marginTop: 16,
    }, 
    inputStyle:{
        flex: 1,
        fontSize:18,
    },
    iconStyle:{
        fontSize: 36,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})
