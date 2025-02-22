import { View } from 'react-native'
import { router } from "expo-router"
import Icon from 'react-native-vector-icons/MaterialIcons'






const GoBackArrow = ( ) => {

    const GoBack = () => {
        router.back()
    }

    return (
        <View>
            <Icon name='arrow-back-ios' size={ 27 } onPress={ GoBack } />
        </View>
    )
}



export default GoBackArrow


