import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'

export default function Splash() {
    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>
                My Doctor
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
        marginTop: 20
    }
})
