import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Themes } from '../../components/themes'
import tutorsArray from '../../components/tutorsArray'
import tutorPic from '../../assets/tutorPic.jpg'
import GoBackArrow from '../../components/navBackArrow'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'





const Tutors = () => {


    // navigate to full tutor profile
    const navigateToFullTutorProfile = ( ) => {
        router.push('../(SupportScreen)/tutorProfile')
    }






    return (
        <SafeAreaView style={ styles.parentContainer }>
            <GoBackArrow />

            <View style={ styles.tutorTitleView }>
                <Text style={ styles.tutorTitleText }>Meet Your Expert Tutors</Text>
                <Text style={ styles.tutorIntroText }>Learning is easier with the right tutor. Explore our list of expert educators and start your journey to success!</Text>
            </View>

            <View>
                <FlatList 
                    data={ tutorsArray }
                    keyExtractor={({ id }) => id }
                    renderItem={({ item }) => (
                        <View style={ styles.displayTutorParentView }>
                            <View style={ styles.tutorInfoViewStyle }>
                                <View>
                                    <Image source={ tutorPic } style={ styles.tutorPicStyle } />
                                </View>

                                <View>
                                    <View style={ styles.tutorDetailIconView }>
                                        <Fontisto name='person' size={ 16 } style={ styles.tutorDetailsIcon } />
                                        <Text style={ [ styles.tutorDetailText, styles.tutorNameText ] }>{ item.name }</Text>
                                    </View>

                                    <View style={ styles.tutorDetailIconView }>
                                        <Ionicons name='book-sharp' size={ 16 } style={ styles.tutorDetailsIcon } />
                                        <Text style={ styles.tutorDetailText }>{ item.subject }</Text>
                                    </View>

                                    <View style={ styles.tutorDetailIconView }>
                                        <Ionicons name='location-sharp' size={ 16 } style={ styles.tutorDetailsIcon } />
                                        <Text style={ styles.tutorDetailText }>{ item.location }</Text>
                                    </View>

                                </View>

                                <View style={ styles.tutorDetailIconView}>
                                    <Text style={ styles.tutorDetailsIcon }>{ item.averageRating }</Text>
                                    <AntDesignIcon name='star' size={ 20 } color='gold' />
                                    
                                </View>
                            </View>

                            <View style={ styles.bioViewStyle }>
                                <Text style={ styles.bioText }>Bio: { item.bio }...</Text>

                                <View style={ styles.actionBtnsView }>
                                    <TouchableOpacity style={ styles.hireTutorBtn } onPress={ navigateToFullTutorProfile}>
                                        <Text style={ styles.hireTutorBtnText }>Full profile</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity style={ styles.hireTutorBtn }>
                                        <Text style={ styles.hireTutorBtnText }>Hire</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    )}
                />
            </View>



        </SafeAreaView>
    )
}



export default Tutors




const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: Themes.parentBackgroundColor,
        padding: 20
    },
    displayTutorParentView: {
        backgroundColor: Themes.white,
        marginVertical: 10,
        // height: 200,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10

    },
    tutorInfoViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bioViewStyle: {
        marginTop: 8
    },
    tutorTitleView: {
        marginTop: 30
    },
    tutorTitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Themes.primaryButtonBackground
    },
    tutorIntroText: {
        color: 'grey'
    },
    tutorPicStyle: {
        width: 85, 
        height: 85,
        borderRadius: 40
    },
    tutorDetailIconView: {
        flexDirection: 'row',
        marginBottom: 5
    },
    tutorDetailsIcon: {
        marginRight: 10
    },
    tutorNameText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Themes.primaryButtonBackground
    },
    bioText: {
        fontStyle: 'italic',
        color: 'grey',
        marginVertical: 20
    },
    hireTutorBtn: {
        backgroundColor: Themes.primaryButtonBackground,
        borderRadius: 10,
        padding: 12,
        width: '40%',
        marginRight: '5%'
    },
    hireTutorBtnText: {
        textAlign: 'center',
        color: 'white',
        marginTop: 4,
        fontWeight: 'bold'
    },
    tutorDetailText: {
        marginVertical: 2
    },
    actionBtnsView: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }




})