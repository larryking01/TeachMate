import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import notificationIcon from '../../assets/notificationIcon.png'
// import personIcon from '../../assets/personIcon.png'
import personIcon2 from '../../assets/personIcon2.png'
import Icon from 'react-native-vector-icons/Ionicons'





const Home = () => {


    
    return (
        <View style={ styles.parentContainer }>
            <SafeAreaView>
                <View>
                    <View style={ styles.userInfoView }>
                        <View style={ styles.iconNameView }>
                            <Image source={ personIcon2 } style={ styles.iconImage } resizeMode='contain'/>
                            <Text style={ styles.userNameText }>Hello Paula,</Text>
                        </View>

                        <TouchableOpacity>
                            <Image source={ notificationIcon } style={ styles.notificationIcon } resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>

                    <View style={ styles.searchBarView }>
                        <TouchableOpacity>
                            <Icon name='search' size={ 30 } color='black' style={ styles.searchIcon } />
                        </TouchableOpacity>
                        <TextInput placeholder='Search for tutors by name or subject' placeholderTextColor="#888" style={ styles.searchInput } />
                    </View>

                </View>
            </SafeAreaView>
        </View>
    )
}



export default Home




const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        padding: 10,
        // backgroundColor: '#000'
    },
    userInfoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6
    },
    iconNameView: {
        flexDirection: 'row',
    },
    iconImage: {
        width: 40
    },
    userNameText: {
        marginTop: 8,
        fontSize: 22,
        marginLeft: 10,
    },
    notificationIcon: {
        height: 30,
        width: 30,
        marginTop: 10
    },
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