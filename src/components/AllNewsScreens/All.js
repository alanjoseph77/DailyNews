import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';
import { fetchBreakingNews, fetchallNews, } from '../../../api/newsdb';

import Loading from '../Loading';

const All = ({ route }) => {
  const { category } = route.params;
  
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    

    getallNews();
  }, []);

  const getallNews = async () => {
    try {
      const data = await fetchallNews();
      console.log('got breaking news', data);

      if (data && data.articles) setAllNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching breaking news:', error);
      setLoading(false);
    }
  };

  return (

    
    
    <View style={styles.container}>
       {loading ? (
        <Loading />
      ) : (

<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
      <Text style={styles.category}>Category: {category}</Text>
      {allNews.map((news, index) => (
        <View key={index} style={styles.newsContainer}>
          {news.urlToImage && <Image source={{ uri: news.urlToImage }} style={styles.newsImage} />}
          <Text style={styles.newsTitle}>{news.title}</Text>
          <Text style={styles.newsTitle}>{news.description}</Text>
        </View>
      ))}
       </ScrollView>
        )}
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 10,
    flexDirection: 'row', // To display image and title side by side
    alignItems: 'center', // To center the items vertically in the row
  },
  newsImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25, // To make the image circular, adjust the borderRadius accordingly
  },
  newsTitle: {
    fontSize: 16,
  },
});

export default All;
