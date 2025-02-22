import { Stack } from "expo-router"






const SupportScreenLayout = ( ) => {

    
    return (
        <Stack>
            <Stack.Screen
                name='tutorProfile'
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}



export default SupportScreenLayout