import { Stack } from 'expo-router'





const AuthScreensLayout = ( ) => {


    return (
        <Stack>
            <Stack.Screen name='studentLogin' options={{ headerShown: false }} />
            <Stack.Screen name='studentSignUp' options={{ headerShown: false }} />
            <Stack.Screen name='tutorLogin' options={{ headerShown: false }} />
            <Stack.Screen name='tutorSignUpStep1' options={{ headerShown: false }} />
            <Stack.Screen name='tutorSignUpStep2' options={{ headerShown: false }} />
            <Stack.Screen name='tutorSignUpStep3' options={{ headerShown: false }} />
        </Stack>
    )
}



export default AuthScreensLayout