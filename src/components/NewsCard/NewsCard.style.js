import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin:16,
    },
    image:{
        width:Dimensions.get('window').width,
        resizeMode:'contain',
    },
    title:{
        fontSize: 24,
        textAlign:'center',
        color:'black',
        fontWeight:'bold'
    },
    description:{

    }
});

export default styles;