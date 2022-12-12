import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
        container: {
            flex: 1,
            flexDirection:'column',
        },
        title:{
            fontSize:48,
            textAlign:'center',
            color:'white',
            letterSpacing:2,
            fontStyle:'italic'
        },
        scrollView:{
            flex: 0.15,
        },
        flatList: {
            flex: 0.85,
            backgroundColor:'gray',
        },
        image: {
            width: Dimensions.get('window').width / 2,
        },
    }
);


