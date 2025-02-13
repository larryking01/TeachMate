import { useState } from 'react'
import { Alert, View, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginComponent from '../../components/loginComponent'



const TutorLogin = ( ) => {

    const [ tutorEmail, setTutorEmail ] = useState('')
    const [ tutorPassword, setTutorPassword ] = useState('')

    const UpdateTutorEmail = (email) => {
        setTutorEmail( email )
    }

    const UpdateTutorPassword = (password) => {
        setTutorPassword( password )
    }

    const HandleTutorLogin = () => {
        Alert.alert(`Email: ${ tutorEmail } \nPassword: ${ tutorPassword }`)
    }


    return (
        <>
            <LoginComponent
                userType='Tutor'
                email={ tutorEmail }
                password={ tutorPassword }
                setEmail={ setTutorEmail }
                setPassword={ setTutorPassword }
                UpdateEmail={ UpdateTutorEmail }
                UpdatePassword={ UpdateTutorPassword }
                HandleLogin={ HandleTutorLogin }
                signUpType='tutorSignUpStep1'
            />
        </>
    )
}



export default TutorLogin