import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import axios from 'axios';

const Sports = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getLiveMatches();
  }, []);

  const getLiveMatches = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
        params: {
          Category: 'soccer',
          Timezone: '-7'
        },
        headers: {
          'X-RapidAPI-Key': '51e6e54c9fmsh45cfb865ba9dd75p119253jsnab832fdd10df',
          'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      setMatches(response.data.data.match);
    } catch (error) {
      console.error(error);
    }
  };

  const renderMatchItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text>{item.home_name} vs {item.away_name}</Text>
      <Text>Score: {item.ft_score}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  return (
    <View>
      <StatusBar backgroundColor="transparent" />
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>Live Soccer Matches</Text>
      <FlatList
        data={matches}
        renderItem={renderMatchItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Sports;
