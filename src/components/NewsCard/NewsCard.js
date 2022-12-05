import React from 'react';
import {View, Text, Image} from 'react-native';


import styles from './NewsCard.style';

const NewsCard = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:props.element.imageUrl}}/>
            <Text  style={styles.title}>{props.element.title}</Text>
            <Text  style={styles.description}>{props.element.description}</Text>
        </View>
    )
}

export default NewsCard;