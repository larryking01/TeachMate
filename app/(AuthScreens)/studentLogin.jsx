import { useState } from 'react'
import LoginComponent from '../../components/loginComponent'
import { router } from 'expo-router'




const StudentLogin = ( ) => {

    const [ studentEmail, setStudentEmail ] = useState('')
    const [ studentPassword, setStudentPassword ] = useState('')

    const UpdateStudentEmail = (email) => {
        setStudentEmail( email )
    }

    const UpdateStudentPassword = (password) => {
        setStudentPassword( password )
    }


    const HandleStudentLogin = () => {
        router.push('../(MainAppScreens)/home')
    }



    return (
        <>
            <LoginComponent
                userType='Student'
                email={ studentEmail }
                password={ studentPassword }
                setEmail={ setStudentEmail }
                setPassword={ setStudentPassword }
                UpdateEmail={ UpdateStudentEmail }
                UpdatePassword={ UpdateStudentPassword }
                HandleLogin={ HandleStudentLogin }
                signUpType='studentSignUp'
                // loginType='home'
            />
        </>
    )
}



export default StudentLogin


