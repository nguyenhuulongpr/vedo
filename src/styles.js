import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    homePageContainer: {
        display: 'flex',
        height: '100%',
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: '8%',
        backgroundColor: '#567',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontFamily: 'harlowsi',
        fontSize: 35,
        color: '#f5f5f5',
    },
    featureContainer: {
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    featureButton: {
        marginLeft: 20,
        marginRight: 20,
        width: '27%',
        height: '80%',
        borderWidth: 4,
        borderColor: '#a6a6a6',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    preprocessImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width
    },
    processContainer: {
        height: '15%',
        alignItems: 'center'
    },
    processButton: {
        height: '40%',
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },
    textProcessButton: {
        fontSize: 16,
        color: '#f5f5f5',
    },
    resultPageContainer: {
        display: 'flex',
        height: '100%',
        backgroundColor: 'white',
        // alignItems: 'center',

    },
    processedImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultContainer: {
        alignItems: 'center'
    },
    copyButton: {
        display: 'flex',
        flexDirection: 'row',
        width: 80,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    resultBox: {
        backgroundColor: '#e0e0e0',
        marginTop: 20,
        padding: 10,
        height: 150,
        width: '90%',
        borderRadius: 10
    },
    textResult: {
        fontSize: 15
    }
});