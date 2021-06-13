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
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
        borderWidth: 0.2,
        borderRadius: 5
    }
})


export const tabstyle = StyleSheet.create({
    tabbar: {
        backgroundColor: '#3f51b5',
    },
    indicator: {
        backgroundColor: '#ffeb3b',
    },
    label: {
        fontWeight: '400',
    },
    tabStyle: {
        width: 'auto',
    },
});