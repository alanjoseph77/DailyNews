import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator,Image } from 'react-native';

const NEWS_API_KEY = "5f0b92303547434a9b18107542818950";
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${NEWS_API_KEY}`;

const SportsN = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(NEWS_API_URL);
      const data = await response.json();
      console.log('got sports news', data);
      setNewsData(data.articles);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching sports news:', error);
      setIsLoading(false);
    }
  };

  const renderNewsItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      <Text style={{ fontSize: 14 }}>{item.description}</Text>
      {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={{ width: 200, height: 100 }} />}
    </View>
  );

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={newsData}
          renderItem={renderNewsItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

export default SportsN;
