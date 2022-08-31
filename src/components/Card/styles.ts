import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    card: {
        backgroundColor: '#39A9DB',
        marginVertical: 6,
        width: Dimensions.get('screen').width - 50,
        height: Dimensions.get('screen').height - 700,
        borderRadius: 20,
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        position: 'absolute',
        left: 0,
        width: 150,
        height: Dimensions.get('screen').height - 700,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    informations: {
        marginVertical: 20,
        marginLeft: 150,
    }
});