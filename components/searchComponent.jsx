import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'






const SearchComponent = ( ) => {


    return (
        <View style={ styles.searchBarView }>
            <TouchableOpacity>
                <Icon name='search' size={ 30 } color='black' style={ styles.searchIcon } />
            </TouchableOpacity>
            <TextInput placeholder='Search for tutors by name or subject' placeholderTextColor="#888" style={ styles.searchInput } />
        </View>
        
    )
}



export default SearchComponent



const styles = StyleSheet.create({
    searchBarView: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 10,
        padding: 10
    },
    searchInput: {
        flex: 1,
        height: 30,
        fontSize: 16,
        alignItems: 'center'
    },
    searchIcon: {
        marginRight: 15
    }

})