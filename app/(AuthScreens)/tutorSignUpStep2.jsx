import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Link, router } from 'expo-router'
import { Themes } from '../../components/themes'







const TutorSignUpStep2 = ( ) => {


    return (
        <View style={ styles.parentContainer }>
            <View style={ styles.headerView }>
                <Text style={ styles.teachMateTitleText }> <Link href='/'> Teach Mate </Link> </Text>
            </View>

            <ScrollView>
                <View>
                    <Text style={ styles.signUpAsTutorText }>Sign Up As Tutor</Text>
                    <Text style={ styles.tutorSignUpStepText }>Step 2: Professional Info</Text>
                </View>

                <View style={ styles.textInputFieldsView }>
                    <TextInput
                        placeholder='Highest Institution Attended eg. University/College'
                        style={ styles.textFieldStyle }
                    />

                    <TextInput
                        placeholder='Major'
                        style={ styles.textFieldStyle }
                    />

                    <TextInput
                        placeholder='Degree'
                        style={ styles.textFieldStyle }
                    />

                    <TextInput
                        placeholder='Subjects You Can Teach'
                        style={ styles.textFieldStyle }
                    />


                    <TextInput
                        placeholder='Languages Spoken'
                        style={ styles.textFieldStyle }
                    />

                    <TextInput
                        placeholder='Location'
                        style={ styles.finalFieldStyling }
                    />

                    <TextInput
                        placeholder='Available Teaching Hours'
                        style={ styles.finalFieldStyling }
                    />

                    <TextInput
                        placeholder='Years Of Experience'
                        style={ styles.finalFieldStyling }
                    />

                    <TextInput
                        placeholder='Profile Photo Upload'
                        style={ styles.finalFieldStyling }
                    />


                    <TouchableOpacity style={ styles.signUpBtn } activeOpacity={ 0.5 } onPress={() => router.push('./tutorSignUpStep3')}>
                        <Text style={ styles.signUpBtnText }>Continue to next step</Text>
                    </TouchableOpacity>

                </View>

                <View style={ styles.textInputFieldsView }>
                    <Text style={ styles.haveAnAccountText }>Already have an account? <Link href='./tutorLogin' style={ styles.logInHereLinkText }>Log in here</Link></Text>
                </View>
            </ScrollView>
            
        </View>
    )
}



export default TutorSignUpStep2




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
