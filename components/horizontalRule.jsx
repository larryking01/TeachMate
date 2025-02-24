import { View, StyleSheet } from 'react-native'




const HorizontalRule = ( ) => {

    return (
        <View style={ styles.horizontalRule }>

        </View>
    )
}


export default HorizontalRule


const styles = StyleSheet.create({
    horizontalRule: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
        marginVertical: 10
    }
})