import React from 'react';
import { ScrollView, View, FlatList, Image, Text} from 'react-native';
import NewsCard from './components/NewsCard';
import styles from './App.style';

import news_banner_data from './news_banner_data.json';
import news_data from './news_data.json';



const App = () => {
  return (
    <View style={styles.container}>

        <View style={styles.scrollView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{flexGrow:1}}>
              {
                news_banner_data.map(
                  (item) => <Image source={{uri:item.imageUrl}} style={styles.image} key={item.id}/>
                )
              }
          </ScrollView>
        </View>


      <View style={styles.flatList}>
        <Text style={styles.title}>News</Text>
        <FlatList
                data={news_data}
                renderItem={({item}) => <NewsCard item={item} key={item.u_id}/>}
        />
      </View>
    </View>
  );
};

export default App;
