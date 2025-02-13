import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import home_tutor_cover from '../assets/page_cover.jpg'
import { Themes } from '../components/themes'
// import landingPageCoverSVG from '../assets/landingPageCoverPic.svg'
// import landingPageCoverPNG from '../assets/landingPageCoverPicPng.png'




const InitialRoute = ( ) => {


    const goToStudentLogin = () => {
        router.push('./(AuthScreens)/studentLogin')
    }

    const goToTutorLogin = () => {
        router.push('./(AuthScreens)/tutorLogin')
    }


    return (
        <SafeAreaView style={ styles.parentContainer }>
            <View>
                <View style={ styles.appTitleView }>
                    <Text style={ styles.appTitle }>Teach Mate</Text>
                    <Text style={ styles.appMotto }>A friendly companion for finding tutors.</Text>
                </View>
                
                <View style={styles.imageViewContainer} className='items-center'>
                    <Image source={ home_tutor_cover } 
                           resizeMode='cover' style={ styles.imageRounded } />
                </View>

                <View style={ styles.userTypeView }>
                    <TouchableOpacity style={ styles.button } activeOpacity={ 0.7 } onPress={ goToStudentLogin }>
                        <Text style={ styles.btnText }>Continue As Student</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.button } activeOpacity={ 0.7 } onPress={ goToTutorLogin }>
                        <Text style={ styles.btnText }>Continue As Tutor</Text>
                    </TouchableOpacity>
                </View>


                {/* <View style={ styles.selectUserTypeText }>
                    <Text className='italic'>Select your user-type to continue...</Text>
                </View> */}
            </View>
        </SafeAreaView>
    )
}



export default InitialRoute




// backgrounds: #1E3A8A #60A5FA #047857 #FACC15 #F97316 #7C3AED #F472B6 #0D9488 #1E293B
const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: Themes.primaryColor
    },
    imageRounded: {
        width: 380,
        borderRadius: '100%'
    },
    imageViewContainer: {
        width: '100%',
        marginTop: '8%'
    },
    appTitleView: {
        alignItems: 'center',
        marginTop: 20,
    },
    appTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        // color: '#fff'
    },
    appMotto: {
        fontSize: 16,
        fontStyle: 'italic',
        // color: '#fff'
    },
    userTypeView: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        padding: 16,
        backgroundColor: Themes.buttonPrimaryColor,
        marginBottom: 25,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: Themes.buttonPrimaryTextColor
    },
    selectUserTypeText: {
        alignItems: 'center'
    }

})