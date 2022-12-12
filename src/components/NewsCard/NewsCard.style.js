import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:'whitesmoke',
        margin:8,
        borderRadius:4,
        padding:8,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize: 24,
        textAlign:'center',
        fontWeight:'bold',
        color:'black',
        textTransform:'capitalize',
        marginTop:8
    },
    image:{
        flex:1,
        width: Dimensions.get('window').width,
        height: 200,
        justifyContent:'center',
        resizeMode:'contain',
    },
    author: {
        color:'black',
        fontWeight:'500',
    },
    description:{
        paddingVertical:8,
        color:'black',
    }
});
