import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { Link, router } from 'expo-router'
import { Themes } from '../../components/themes'






const StudentSignUp = ( ) => {



    const HandleStudentSignUp = () => {
        router.push('../(MainAppScreens)/home')
    }


    return (
        <View style={ styles.parentContainer }>
            <View style={ styles.headerView }>
                <Text style={ styles.teachMateTitleText }><Link href='/'> Teach Mate </Link> </Text>
            </View>

            <Text style={ styles.signUpAsStudentText }>Sign Up As Student</Text>

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

                <TouchableOpacity style={ styles.signUpBtn } activeOpacity={ 0.5 } onPress={ HandleStudentSignUp }>
                    <Text style={ styles.signUpBtnText }>Sign Up</Text>
                </TouchableOpacity>

            </View>

            <View style={ styles.textInputFieldsView }>
                <Text style={ styles.haveAnAccountText }>Already have an account? <Link href='./studentLogin' style={ styles.logInHereLinkText }>Log in here</Link></Text>
            </View>
            
        </View>
    )
}



export default StudentSignUp




const styles = StyleSheet.create({
    parentContainer: {
        flex: 1
    },
    headerView: {
        backgroundColor: Themes.primaryColor,
        height: '18%',
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
    signUpAsStudentText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 21,
        marginBottom: 30

    },
    signUpBtn: {
        backgroundColor: Themes.buttonPrimaryColor,
        padding: 15,
        height: 53,
        borderRadius: 10,
        marginBottom: 40
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
