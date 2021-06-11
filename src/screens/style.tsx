import { StyleSheet } from 'react-native'


export const style = StyleSheet.create({
    image: {
        width: 250,
        height: 250, 
        marginVertical: 40
    }, 
    view: {
        backgroundColor: "#ffffff",
        alignItems: 'center', 
        justifyContent: 'center'
    },
    caption: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 16,
        paddingBottom: 5
    }, 
    slider: {
        width: '80%',
        paddingBottom: 20
    },
    picker: {
        width: '80%',
        marginBottom: 20,
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 0.2,
        borderRadius: 5
    }
})