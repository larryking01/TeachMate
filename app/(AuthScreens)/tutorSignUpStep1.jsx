import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { Link, router } from 'expo-router'
import { Themes } from '../../components/themes'







const TutorSignUp = ( ) => {


    // continue to step 2 tutor sign-up
    const ContinueToStep2TutorSignUp = ( ) => {
        router.push('./tutorSignUpStep2')
    }

    return (
        <View style={ styles.parentContainer }>
            <View style={ styles.headerView }>
                <Text style={ styles.teachMateTitleText }> <Link href='/'> Teach Mate </Link> </Text>
            </View>

            <View>
                <Text style={ styles.signUpAsTutorText }>Sign Up As Tutor</Text>
                <Text style={ styles.tutorSignUpStepText }>Step 1: Basic Info</Text>
            </View>


            <View style={ styles.textInputFieldsView }>
                <TextInput
                    placeholder='First Name'
                    style={ styles.textFieldStyle }
                />

                <TextInput
                    placeholder='Last Name'
                    style={ styles.textFieldStyle }
                />

                <TextInput
                    placeholder='E-mail'
                    style={ styles.textFieldStyle }
                />

                <TextInput
                    placeholder='Phone'
                    style={ styles.textFieldStyle }
                />


                <TextInput
                    placeholder='Password'
                    style={ styles.textFieldStyle }
                />

                <TextInput
                    placeholder='Confirm Password'
                    style={ styles.finalFieldStyling }
                />

                <TouchableOpacity style={ styles.signUpBtn } activeOpacity={ 0.5 } onPress={() => router.push('./tutorSignUpStep2')}>
                    <Text style={ styles.signUpBtnText }>Continue to next step</Text>
                </TouchableOpacity>

            </View>

            <View style={ styles.textInputFieldsView }>
                <Text style={ styles.haveAnAccountText }>Already have an account? <Link href='./tutorLogin' style={ styles.logInHereLinkText }>Log in here</Link></Text>
            </View>
            
        </View>
    )
}



export default TutorSignUp




const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: Themes.parentBackgroundColor,

    },
    headerView: {
        backgroundColor: Themes.white,
        height: '16%',
        marginBottom: 30,
        paddingLeft: 20
    },
    teachMateTitleText: {
        marginTop: 70,
        fontWeight: 'bold',
        fontSize: 30,
    },
    textInputFieldsView: {
        paddingHorizontal: 20
    },
    textFieldStyle: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 10,
        height: 53,
        marginBottom: 25
    },
    finalFieldStyling: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 10,
        height: 53,
        marginBottom: 40
    },
    signUpAsTutorText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 21,
        marginBottom: 15
    },
    tutorSignUpStepText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 30,
        color: 'blue'
    },
    signUpBtn: {
        backgroundColor: Themes.primaryButtonBackground,
        padding: 15,
        height: 53,
        borderRadius: 10,
        marginBottom: 30
    },
    signUpBtnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: Themes.buttonPrimaryTextColor
    },
    haveAnAccountText: {
        textAlign: 'center'
    },
    logInHereLinkText: {
        color: 'blue',
        fontWeight: 'bold'
    }


}
)
