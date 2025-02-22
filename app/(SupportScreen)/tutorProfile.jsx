import { useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { Themes } from '../../components/themes'
import tutorsArray from '../../components/tutorsArray'
import tutorPicture from '../../assets/tutorPic.jpg'
import tutorReviews from '../../components/reviewsArray'
import reviewerPic from '../../assets/reviewerPic.jpeg'
import Icon from 'react-native-vector-icons/Feather'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import GoBackArrow from '../../components/navBackArrow'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'





const TutorProfile = ( ) => {

    let targetTutor = tutorsArray[ 0 ] 
    const [ showTutorInfo, setShowTutorInfo ] = useState( true )
    // const [ showTutorReviews, setShowTutorReviews ] = useState( false )

    const toggleShowTutorInfo = ( ) => {
        setShowTutorInfo( !showTutorInfo )
        console.log(`tutor info = ${ showTutorInfo }`)
    }

    
    return (
        <SafeAreaView>
            <ScrollView nestedScrollEnabled={ true }>
                <View style={ styles.parentContainer }>
                    <GoBackArrow />

                    <View style={ styles.tutorPicNameContactView }>
                        <View>
                            <Image source={ tutorPicture } style={ styles.tutorPic } />
                        </View>

                        <View style={ styles.tutorPrimaryDetailsView }>
                            <Text style={ styles.tutorTextName }>{ targetTutor.name }</Text>
                            <Text style={ styles.tutorDetailText }>
                                { targetTutor.averageRating } <AntDesignIcon name='star' size={ 18 } color='gold' /> 
                            </Text>
                            <Text style={ styles.tutorDetailText }>{ tutorReviews?.length } reviews</Text>
                        
                            <View style={ styles.callTextActionBtnsView }>
                                <TouchableOpacity style={[ styles.callTextActionBtn, { marginRight: 20 } ] }>
                                    <Icon name='phone-call' size={ 25 } color={ Themes.white } />
                                </TouchableOpacity>

                                <TouchableOpacity style={ styles.callTextActionBtn }>
                                    <Icon name='message-square' size={ 25 } color={ Themes.white } />
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>


                    <View>
                        <TouchableOpacity style={ styles.infoOrReviewsButton } onPress={ toggleShowTutorInfo }>
                            <Text style={ styles.infoOrReviewsButtonText }>
                                { showTutorInfo === true ? 'See Reviews' : 'View Tutor Information'}
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={ styles.informationTextView }>
                        <Text style={ [ styles.detailSectionTextHeader, { textAlign: 'center'}]  }>
                            { showTutorInfo === true ? 'Tutor Information' : 'All Reviews'}
                        </Text>
                    </View>

                    {
                        showTutorInfo === true ?
                            <View>
                            <View style={ styles.detailsView }>
                                <View style={ styles.detailSectionView }>
                                    <View style={ styles.detailSectionTitleIconView }>
                                        <MaterialCommunityIcons name='account-details' size={ 27 } style={ styles.detailSectionIcon } />
                                        <Text style={ styles.detailSectionTextHeader }>Bio</Text>
                                    </View>
                                    <Text>{ targetTutor.bio }</Text>
                                </View>

                                <View style={ styles.detailSectionView }>
                                    <View style={ styles.detailSectionTitleIconView }>
                                        <FontistoIcon name='person' size={ 20 } style={ styles.detailSectionIcon } />
                                        <Text style={ styles.detailSectionTextHeader }>Contact Info</Text>
                                    </View>


                                    <View style={ styles.contactInfoDetails }>
                                        <Icon name='message-square' size={ 20 } style={ styles.contactInfoDetailIcon } />
                                        <Text> { targetTutor.email } </Text>
                                    </View>

                                    <View style={ styles.contactInfoDetails }>
                                        <Icon name='phone-call' size={ 20 } style={ styles.contactInfoDetailIcon } />
                                        <Text> { targetTutor.email } </Text>
                                    </View>
                                </View>


                                <View style={ styles.detailSectionView }>
                                    <View style={ styles.detailSectionTitleIconView }>
                                        <Ionicons name='school' size={ 20 } style={ styles.detailSectionIcon } />
                                        <Text style={ styles.detailSectionTextHeader }>Alma Mata</Text>
                                    </View>

                                    <Text>{ targetTutor.institutionAttended }</Text>
                                </View>
                                

                                <View style={ styles.detailSectionView }>
                                    <View style={ styles.detailSectionTitleIconView }>
                                        <Ionicons name='book-sharp' size={ 20 } style={ styles.detailSectionIcon } />
                                        <Text style={ styles.detailSectionTextHeader }>Subjects & Expertise</Text>
                                    </View>

                                    <Text>{ targetTutor.subject }</Text>
                                </View>


                                <View style={ styles.detailSectionView }>
                                    <View style={ styles.detailSectionTitleIconView }>
                                        <MaterialCommunityIcons name='chart-timeline-variant' size={ 20 } style={ styles.detailSectionIcon } />
                                        <Text style={ styles.detailSectionTextHeader }>Experience </Text>
                                    </View>

                                    <Text>{ targetTutor.yearsOfExperience } years</Text>
                                </View>


                                <View style={ styles.detailSectionView }>
                                    <View style={ styles.detailSectionTitleIconView }>
                                        <Ionicons name='location-sharp' size={ 20 } style={ styles.detailSectionIcon } />
                                        <Text style={ styles.detailSectionTextHeader }>Location & Availability</Text>
                                    </View>

                                    <Text>{ targetTutor.location }</Text>
                                </View>


                                <View style={ styles.detailSectionView }>
                                    <View style={ styles.detailSectionTitleIconView }>
                                        <MaterialCommunityIcons name='pencil' size={ 20 } style={ styles.detailSectionIcon } />
                                        <Text style={ styles.detailSectionTextHeader }>Teaching Methodology</Text>
                                    </View>

                                    <Text>{ targetTutor.teachingMethodology }</Text>
                                </View>


                                <View style={ styles.detailSectionView }>
                                    <View style={ styles.detailSectionTitleIconView }>
                                        <FontistoIcon name='checkbox-active' size={ 20 } style={ styles.detailSectionIcon } />
                                        <Text style={ styles.detailSectionTextHeader }>Preferred Teaching Method</Text>
                                    </View>

                                    <Text>{ targetTutor.teachingPreference }</Text>
                                </View>


                                <View style={ styles.detailSectionView }>
                                    <View style={ styles.detailSectionTitleIconView }>
                                        <Ionicons name='cash' size={ 20 } style={ styles.detailSectionIcon } />
                                        <Text style={ styles.detailSectionTextHeader }>Pricing</Text>
                                    </View>

                                    <Text>Hourly Rate: { targetTutor.hourlyRate }</Text>
                                </View>


                                <View style={ styles.detailSectionView }>
                                    <View style={ styles.detailSectionTitleIconView }>
                                        <MaterialCommunityIcons name='cash-check' size={ 25 } style={ styles.detailSectionIcon } />
                                        <Text style={ styles.detailSectionTextHeader }>Accepted Mode of Payment</Text>
                                    </View>

                                    <Text>{ targetTutor.modeOfPayment }</Text>
                                </View>
                            </View>

                            <View style={ styles.contactTutorView }>
                                <TouchableOpacity style={ styles.contactTutorBtn }>
                                    <Text style={ styles.callTextActionBtnText }>Call</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={ styles.contactTutorBtn }>
                                    <Text style={ styles.callTextActionBtnText }>Message</Text>
                                </TouchableOpacity>
                            
                            </View>

                            </View>
                            :
                            <View style={ styles.reviewsView }>
                                <FlatList
                                    data={ tutorReviews }
                                    keyExtractor={( item ) => item.id }
                                    renderItem={({ item }) => (
                                        <View style={ styles.reviewWrapperView }>
                                            <View style={ styles.reviewPictureAndContentView }>
                                                <View>
                                                    <Image source={ reviewerPic } style={ styles.reviewerPicStyle } />
                                                </View>

                                                <View style={ styles.reviewContentView } >
                                                    <Text>{ item.review }</Text>
                                                </View>
                                            </View>

                                            <View style={ styles.reviewerNameAndDate }>
                                                <Text style={ styles.reviewerNameText }>{ item.studentName }</Text>
                                                <Text style={ styles.reviewerDateSubmittedText }>{ item.dateSubmitted }</Text>
                                            </View>
                                        
                                        </View>
                                    )}
                                />
                            </View>
                    }

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}



export default TutorProfile


const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        padding: 20,
    },
    tutorPicNameContactView: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tutorPic: {
        width: 170,
        height: 170,
        borderRadius: 100
    },
    tutorPrimaryDetailsView: {
        marginTop: 20
    },
    tutorTextName: {
        fontSize: 17,
        color: Themes.primaryButtonBackground,
        fontWeight: 'bold'
    },
    tutorDetailText: {
        marginVertical: 3,

    },
    infoReviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    callTextActionBtnsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
        
    },
    callTextActionBtn: {
        backgroundColor: Themes.primaryButtonBackground,
        padding: 9,
        borderRadius: 100,
    },
    callTextActionBtnText: {
        color: Themes.white,
        textAlign: 'center',
        fontWeight: '600'
    },
    infoOrReviewsButton: {
        backgroundColor: Themes.primaryButtonBackground,
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
        width: '30%'

    },
    infoOrReviewsButtonText: {
        color: Themes.white,
        textAlign: 'center',
        fontWeight: '500',
    },
    informationTextView: {
        marginTop: 50
    },
    detailsView: {
        marginTop: 10,
    },
    detailSectionTitleIconView: {
        flexDirection: 'row',
    },
    detailSectionTextHeader: {
        fontWeight: 'bold',
        fontSize: 17,
        color: Themes.primaryButtonBackground,
        marginBottom: 5
    },
    detailSectionView: {
        marginBottom: 20,
        backgroundColor: Themes.white,
        padding: 15,
        borderRadius: 10
    },
    detailSectionIcon: {
        marginRight: 10
    },
    contactTutorView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    contactTutorBtn: {
        backgroundColor: Themes.primaryButtonBackground,
        padding: 13,
        borderRadius: 10,
        width: 140
    },
    reviewWrapperView: {
        padding: 10,
        backgroundColor: Themes.white,
        marginBottom: 20,
        borderRadius: 10,
    },
    reviewPictureAndContentView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    reviewerPicStyle: {
        width: 90,
        height: 90,
        borderRadius: 100
    },
    reviewContentView: {
        marginLeft: 20,
        marginRight: 90
    },
    reviewerNameAndDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    reviewerNameText: {
        color: Themes.primaryButtonBackground,
        fontWeight: '600'
    },
    reviewerDateSubmittedText: {
        color: Themes.grey
    },
    contactInfoDetails: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    contactInfoDetailIcon: {
        marginRight: 20
    }

})