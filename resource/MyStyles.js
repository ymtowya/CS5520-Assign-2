import { StyleSheet } from "react-native";


const myStyling = StyleSheet.create({
    myCardo: {
        justifyContent: 'center',
        paddingVertical: 60,
        paddingHorizontal: 30,
        backgroundColor: '#FFF8DC',
        elevation: 20,
        shadowColor: 'black',
        shadowRadius: 40,
        shadowOffset: {
            width: 20,
            height: 20
        },
        shadowOpacity: 10,
        borderRadius: 10
    },
    inputBox: {
        borderBottomWidth: 1,
        height: 40,
        margin: 5,
        padding: 12,
        minWidth: 160,
        backgroundColor: '#FFFAFA',
        textAlign: 'center',
    },
    boldText: {
        fontWeight: 'bold'
    },
    warningText: {
        color: 'red'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundLinear: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    generalButton: {
        backgroundColor: "yellow",
        color: 'white',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    pressedButton: {
        
    },
    tagText: {
        paddingRight: 2
    },
    tagButn: {
        fontWeight: 'bold',
        backgroundColor: 'white',
        width: 60,
        textAlign: 'center',
        paddingVertical: 7
    },
    image: {
        justifyContent: 'center',
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    colors: {
        buttonWarningColor: 'red',
        buttonNormalColor: '#007AFF',
        bgColor1: '#1874CD',
        bgColor2: '#6E8B3D',
    },

});

export default myStyling;