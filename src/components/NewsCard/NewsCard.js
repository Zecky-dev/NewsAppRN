import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './NewsCard.style';

const NewsCard = ({item}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:item.imageUrl}} style={styles.image}/>
            <Text  style={styles.title}>{item.title}</Text>
            <Text  style={styles.description}>{item.description}</Text>
            <Text style={styles.author}>
                {item.author}
            </Text>
        </View>
    );
};

export default NewsCard;
