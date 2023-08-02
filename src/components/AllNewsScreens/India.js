import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import axios from "axios";
import Loading from '../Loading';

const API_KEY = '5f0b92303547434a9b18107542818950';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${API_KEY}`;
const India = () => {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBreakingNews();
  }, []);

  const getBreakingNews = async () => {
    try {
      const response = await fetch(NEWS_API_URL);
      console.log('got breaking news', response);
      const data = await response.json();
      setAllNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
          <Text style={styles.category}>Category: India</Text>
          {allNews.length > 0 ? (
            allNews.map((newsItem, index) => (
              <View key={index} style={styles.newsContainer}>
                {newsItem.image_url && <Image source={{ uri: newsItem.image_url }} style={styles.newsImage} />}
                <Text style={styles.newsTitle}>{newsItem.title}</Text>
                <Text style={styles.newsDescription}>{newsItem.server}</Text>
              </View>
            ))
          ) : (
            <Text>No news articles found</Text>
          )}
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  newsImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  newsTitle: {
    fontSize: 16,
  },
  newsDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default India;
