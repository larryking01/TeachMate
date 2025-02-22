import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import notificationIcon from '../../assets/notificationIcon.png'
import personIcon2 from '../../assets/personIcon2.png'
import tutorsArray from '../../components/tutorsArray'
import { Themes } from '../../components/themes'
import tutorPic from '../../assets/tutorPic.jpg'
import notFound from '../../assets/not_found.png'
import SearchComponent from '../../components/searchComponent'

import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'






const Home = () => {


    // navigate to full tutor profile
    const navigateToFullTutorProfile = ( ) => {
        router.push('../(SupportScreen)/tutorProfile')
    }
    

    
    return (
        <View style={ styles.parentContainer }>
            <SafeAreaView>
                <View>
                    <View style={ styles.userInfoView }>
                        <View style={ styles.iconNameView }>
                            <Image source={ personIcon2 } style={ styles.iconImage } resizeMode='contain'/>
                            <Text style={ styles.userNameText }>Hello Larry,</Text>
                        </View>

                        <TouchableOpacity>
                            <Image source={ notificationIcon } style={ styles.notificationIcon } resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>

                    
                    <SearchComponent />
                </View>

                <View>
                    <FlatList 
                        data={ tutorsArray }
                        keyExtractor={( item ) => item.id }
                        renderItem={({ item }) => (
                            <View style={ styles.ratedTutorsParentView }>
                                <View>
                                    <Image source={ tutorPic } style={ styles.tutorPicStyle } resizeMode='cover' />
                                </View>

                                <View>
                                    <View style={ styles.topRatedTutorDetailIconView }>
                                        <Fontisto name='person' size={ 16 } style={ styles.topRatedTutorDetailsIcon } />
                                        <Text style={ [ styles.tutorDetailsText, styles.tutorNameText ] }>{ item.name }</Text>
                                    </View>

                                    <View style={ styles.topRatedTutorDetailIconView }>
                                        <Ionicons name='book-sharp' size={ 16 } style={ styles.topRatedTutorDetailsIcon } />
                                        <Text style={ styles.tutorDetailsText }>{ item.subject }</Text>
                                    </View>

                                    <View style={ styles.topRatedTutorDetailIconView }>
                                        <Ionicons name='location-sharp' size={ 16 } style={ styles.topRatedTutorDetailsIcon } />
                                        <Text style={ styles.tutorDetailsText }>{ item.location }</Text>
                                    </View>
                                </View>

                                <View>
                                    <View style={ styles.topRatedTutorDetailIconView }>
                                        <Text style={ [ styles.tutorDetailsText, styles.topRatedTutorDetailsIcon ] }>{ item.averageRating }</Text>
                                        <AntDesignIcon name='star' size={ 20 } color='gold' />
                                    </View>
                                    
                                    <TouchableOpacity style={ styles.hireTutorBtn } onPress={ navigateToFullTutorProfile }>
                                        <Text style={ [ styles.tutorDetailsText, styles.hireTutorBtnText  ] }>See profile</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                        )}
                        ListHeaderComponent={ <Text style={ styles.topRatedTutors }>Top Rated Tutors</Text>}
                        ListEmptyComponent={
                                <View style={ styles.notFoundView }>
                                <Image source={ notFound } style={ styles.notFoundImage } resizeMode='contain' />
                                <Text style={ styles.notFoundText }>Sorry...this information is not available right now</Text>
                                </View>
                                }
                />
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
        backgroundColor: Themes.parentBackgroundColor
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
    ratedTutorsParentView: {
        flex: 1,
        flexDirection: 'row',
        // height: 115,
        backgroundColor: Themes.white,
        marginVertical: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
    },
    tutorPicStyle: {
        width: 80, 
        height: 80,
        borderRadius: 40
    },
    tutorDetailsText: {
        marginBottom: 8,
        // fontWeight: '500'
    },
    tutorNameText: {
        fontWeight: 'bold',
        color: Themes.primaryButtonBackground
    },
    topRatedTutorDetailIconView: {
        flexDirection: 'row',
        marginBottom: 5
    },
    topRatedTutorDetailsIcon: {
        marginRight: 10
    },
    hireTutorBtn: {
        backgroundColor: Themes.primaryButtonBackground,
        borderRadius: 10,
        padding: 7
    },
    hireTutorBtnText: {
        textAlign: 'center',
        color: 'white',
        marginTop: 4,
        fontWeight: 'bold'
    },
    topRatedTutors: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        color: Themes.primaryButtonBackground
    },
    notFoundView: {
        textAlign: 'center',
        marginTop: 40
    },
    notFoundImage: {
        width: 100,
        marginBottom: 10,
        marginLeft: 140
    },
    notFoundText: {
    textAlign: 'center'
    }


})