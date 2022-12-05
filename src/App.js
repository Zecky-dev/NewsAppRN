import React from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';

import news_data from './news_data.json';
import NewsCard from './components/NewsCard';

const App = () => {

  return (
    <View>
      <FlatList
              data={news_data}
              renderItem={({item})=><NewsCard element={item}/>}
      />
    </View>
  );
};

export default App;
