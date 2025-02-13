import { View, Text, StyleSheet } from 'react-native'
import { Tabs } from "expo-router"
import IonIcon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { Themes } from '../../components/themes'





const MainAppScreens = ( ) => {


    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Themes.buttonPrimaryColor,
                // tabBarInactiveTintColor: 'red',
                tabBarStyle: {
                    // backgroundColor: 'yellow',
                    height: 95,
                    paddingTop: 5
                },
                // tabBarLabelPosition: 'below-icon'
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginTop: 5
                }
            }} 
        >
            <Tabs.Screen 
                name='home' 
                options={{ 
                    title: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <IonIcon name='home' size={ 27 } color={ color } />
                    )
                }}
                
             />

            <Tabs.Screen 
                name='tutors' 
                options={{ 
                    title: 'Tutors',
                    tabBarIcon: ({ focused, color }) => (
                        <EntypoIcon name='graduation-cap' size={ 27 } color={ color } />
                    )
                }}
             />

            <Tabs.Screen 
                name='chat' 
                options={{ 
                    title: 'Chat',
                    tabBarIcon: ({ focused, color }) => (
                        <IonIcon name='chatbox-ellipses-outline' size={ 27 } color={ color } />
                    )
                }}
            />

            <Tabs.Screen 
                name='account' 
                options={{ 
                    title: 'Account',
                    tabBarIcon: ({ focused, color }) => (
                        <MaterialIcon name='manage-accounts' size={ 27 } color={ color } />
                    )
                }}
             />

        </Tabs>
    )
}



export default MainAppScreens