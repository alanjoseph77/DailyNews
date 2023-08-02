import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StatusBar } from 'react-native';
import Loading from '../Loading';
import { COLORS } from '../../../constants/theme';

const API_KEY = '5f0b92303547434a9b18107542818950';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`;
const placeholderImage = require('../../../assets/breakingNews.jpg'); // Replace with the path to your placeholder image

const Entertainment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(NEWS_API_URL);
      const data = await response.json();
      setNewsData(data.articles);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setIsLoading(false);
    }
  };

  const renderNewsItem = ({ item }) => (
    <View style={{ padding: 10, alignItems: "center", justifyContent: "center", borderColor: COLORS.primary3, borderWidth: 15, }}>
      <StatusBar backgroundColor={COLORS.primary3} />
      <View style={{ padding: 10, alignItems: "center", justifyContent: "center", borderColor: COLORS.primary3, borderWidth: 15, borderRadius: 19 }}>
        {item.urlToImage ? (
          <Image source={{ uri: item.urlToImage }} style={{ width: 200, height: 100, borderRadius: 4 }} />
        ) : (
          <Image source={placeholderImage} style={{ width: 200, height: 100, borderRadius: 4 }} />
        )}
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.primary3 }}>{item.title}</Text>
        <Text style={{ fontSize: 14 }}>{item.description}</Text>
        <Text style={{ fontSize: 14 }}>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <View>
      {isLoading ? (
        <Loading size="large" color="#000" />
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

export default Entertainment;
