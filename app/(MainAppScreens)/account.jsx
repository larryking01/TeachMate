import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import personIcon2 from '../../assets/personIcon2.png'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import GoBackArrow from '../../components/navBackArrow'
import { Themes } from '../../components/themes'
import HorizontalRule from '../../components/horizontalRule'






const Account = () => {

    const accountSectionArray = [
        {
            sectionTitle: 'Personal info',
            sectionIcon: <Ionicon name='person-sharp' size={ 20 } color={ Themes.grey } /> ,
            sectionGoNextIcon: <MaterialIcon name='arrow-forward-ios' size={ 22 } color={ Themes.grey } />
        },
        {
            sectionTitle: 'Booking & session history',
            sectionIcon: <MaterialIcon name='history' size={ 21 } color={ Themes.grey } />,
            sectionGoNextIcon: <MaterialIcon name='arrow-forward-ios' size={ 22 } color={ Themes.grey } /> 
        },
        {
            sectionTitle: 'Payment & subscription',
            sectionIcon: <Ionicon name='cash' size={ 21 } color={ Themes.grey } /> ,
            sectionGoNextIcon: <MaterialIcon name='arrow-forward-ios' size={ 22 } color={ Themes.grey } /> 
        },
        {
            sectionTitle: 'Help & support',
            sectionIcon: <FontAwesome5Icon name='hands-helping' size={ 21 } color={ Themes.grey } />,
            sectionGoNextIcon: <MaterialIcon name='arrow-forward-ios' size={ 22 } color={ Themes.grey } />
        },
        {
            sectionTitle: 'FAQs',
            sectionIcon: <MaterialIcon name='help-center' size={ 21 } color={ Themes.grey } />,
            sectionGoNextIcon: <MaterialIcon name='arrow-forward-ios' size={ 22 } color={ Themes.grey } />
        },
        {
            sectionTitle: 'Log out',
            sectionIcon: <Ionicon name='log-in-outline' size={ 21 } color={ Themes.grey } />,
            sectionGoNextIcon: <MaterialIcon name='arrow-forward-ios' size={ 22 } color={ Themes.grey } />
        },
        {
            sectionTitle: 'Delete account',
            sectionIcon: <MaterialIcon name='delete' size={ 21 } color={ Themes.grey } />,
            sectionGoNextIcon: <MaterialIcon name='arrow-forward-ios' size={ 22 } color={ Themes.grey } />
        }

    ]

    
    return (

        <SafeAreaView style={ styles.parentContainer }>
            <GoBackArrow />

            <View style={ styles.studentDetailSummaryView }>
                <Image source={ personIcon2 } style={ styles.personIcon } />
                <Text style={ styles.studentNameText }>Larry Williams</Text>

                <View style={ styles.studentEmailPhoneDetail }>
                    <Text style={ styles.studentEmailSummaryText }>larryking8118@gmail.com</Text>
                    <Text style={{ color: Themes.grey }}>|</Text>
                    <Text style={ styles.studentPhoneSummaryText }>0552531004</Text>
                </View>
            </View>


            <View>
                {
                    accountSectionArray.map(( section, index ) => (
                        <View key={ index }>
                            <TouchableOpacity>
                                <View style={ styles.sectionView }>
                                    <View style={ styles.iconSectionTitle }>
                                        { section.sectionIcon }
                                        <Text style={ styles.sectionTitle }>{ section.sectionTitle }</Text>
                                    </View>
                
                                    <View>
                                        { section.sectionGoNextIcon }
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <HorizontalRule />
                        </View>

                    ))
                }

            </View>




        </SafeAreaView>
    )
}



export default Account


const styles = StyleSheet.create({
    parentContainer: {
        padding: 20
    },
    personIcon: {
        marginBottom: 10,
        width: 50
    },
    studentDetailSummaryView: {
        alignItems: 'center',
        marginBottom: 70
    },
    studentEmailPhoneDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    studentNameText: {
        fontWeight: 600,
        fontSize: 20,
        color: Themes.primaryButtonBackground
    },
    studentEmailSummaryText: {
        marginRight: 10,
        color: Themes.grey
    },
    studentPhoneSummaryText: {
        marginLeft: 10,
        color: Themes.grey
    },
    iconSectionTitle: {
        flexDirection: 'row',
    },
    sectionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    sectionTitle: {
        marginLeft: 10,
        fontSize: 15
    }




})