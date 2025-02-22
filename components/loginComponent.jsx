import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { Link } from 'expo-router'
import googleIcon from '../assets/googleIcon.png'
import appleIcon from '../assets/appleIcon.png'
import facebookIcon from '../assets/facebookIcon.png'
import { Themes } from './themes'





const LoginComponent = ({ userType, email, password, signUpType, setPassword, UpdateEmail, UpdatePassword, HandleLogin }) => {


    return (
        <View style={ styles.parentContainer }>
                <View style={ styles.headerView }>
                    <Text style={ styles.teachMateTitleText }><Link href='/'> Teach Mate </Link></Text>
                </View>

                <View style={ styles.loginInputsView }>
                    <Text style={ styles.studentLoginText }>{ userType } Login</Text>
                    <TextInput 
                        placeholder='E-mail'
                        style={ [ styles.textInputs, styles.emailFieldMarginBottom ] }
                        onChangeText={ UpdateEmail }
                        value={ email }
                    />

                    <TextInput 
                        placeholder='Password'
                        style={ [ styles.textInputs, styles.passwordFieldMarginBottom ] }
                        className='mb-5'
                        onChangeText={ UpdatePassword }
                        value={ password }
                    />
                </View>

                <View style={ styles.forgotPasswordView }>
                    <Text>Remember me</Text>
                    <Text>Forgot Password?</Text>
                </View>

                <View style={ styles.loginBtnView }>
                    <TouchableOpacity style={ styles.loginBtn } onPress={ HandleLogin }>
                        <Text style={ styles.loginBtnText }>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={ styles.providersLoginContainer }>
                    <View style={ styles.providersLoginView }>
                        <TouchableOpacity activeOpacity={ 0.5 }>
                            <Image source={ googleIcon } width={ 100 } resizeMode='contain' />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={ facebookIcon } width={ 100 } resizeMode='contain' />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={ appleIcon } width={ 100 } resizeMode='contain' />
                        </TouchableOpacity>
                    </View>

                    <View style={ styles.orLoginWithTextView }>
                        <Text>or log in with</Text>
                    </View>

                    <View style={ styles.dontHaveAnAccountView }>
                        <Text>Don't have an account? <Link href={`./${ signUpType }`} style={ styles.signUpHereLinkText }>Sign Up Here</Link></Text>
                    </View>
                </View>


        </View>
    )
}



export default LoginComponent


const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: Themes.parentBackgroundColor,
    },
    headerView: {
        backgroundColor: Themes.white,
        height: '18%',
        marginBottom: 60,
        paddingLeft: 20
    },
    teachMateTitleText: {
        marginTop: 70,
        fontWeight: 'bold',
        fontSize: 30,
    },
    loginInputsView: {
        paddingHorizontal: 20,

    },
    textInputs: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 10,
        height: 60,
        // marginBottom: 25
    },
    emailFieldMarginBottom: {
        marginBottom: 30
    },
    passwordFieldMarginBottom: {
        marginBottom: 15
    },
    studentLoginText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 21,
        marginBottom: 20
    },
    forgotPasswordView: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40
    },
    loginBtnView: {
        padding: 20,
        alignItems: 'center',
        marginBottom: 60
    },
    loginBtn: {
        backgroundColor: Themes.primaryButtonBackground,
        padding: 15,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center'
    },
    loginBtnText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: Themes.buttonPrimaryTextColor,
    },
    providersLoginContainer: {
        paddingHorizontal: 20
    },
    providersLoginView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    orLoginWithTextView: {
        alignItems: 'center',
        marginBottom: 60

    },
    dontHaveAnAccountView: {
        alignItems: 'center'
    },
    signUpHereLinkText: {
        color: 'blue',
        fontWeight: 'bold'
    }

})