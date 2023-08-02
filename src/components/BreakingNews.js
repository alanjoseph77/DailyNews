// BreakingNews.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions,TouchableOpacity, } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Carousel from 'react-native-snap-carousel';
const placeholderImage = 'https://via.placeholder.com/150'

const { width } = Dimensions.get('window');

const BreakingNews = ({ data }) => {
  
  
  return (
    <View style={styles.container}>
      <Carousel
        
        data={data}
        renderItem={({ item }) => <NewsCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.69}
        slideStyle={{ display: 'flex', alignItems: 'center',marginTop:28 }}
        autoplay={true} // Enable automatic movement
        autoplayInterval={3000} // Set the time interval (in milliseconds) between each slide transition
        loop={true} // Enable looping of carousel items
      />
    </View>
  );
};

const NewsCard = ({ item }) => {
  const navigation = useNavigation();
  const imageWidth = width * 0.7;
  const imageUrl = item.urlToImage ? item.urlToImage : placeholderImage;

  if (!imageUrl) {
    // Return null or any other fallback content when imageUrl is null or undefined
    return null;
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('NewsScreen', { item })}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: imageWidth, height: 200, borderRadius: 10 }}
        onError={(error) => console.log('Image loading error:', error)}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.time}>{item.published_at}</Text> */}
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    // maxHeight: '40%', // Set the maximum height of the text container
  },
  title: {
    color: '#fff',
    fontSize: 12, // Adjust the font size as needed to fit the title
    fontWeight: 'bold',
    textAlign: 'center',
    // marginBottom: 6, // Add some spacing between the title and time
  },
  time: {
    color: '#fff',
    fontSize: 10, // Adjust the font size as needed to fit the time
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default BreakingNews;
