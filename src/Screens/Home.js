import { Dimensions, StatusBar, StyleSheet, Text, View,ScrollView,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Bars3CenterLeftIcon,Bars3BottomLeftIcon} from 'react-native-heroicons/outline'
import { COLORS } from '../../constants/theme';
import BreakingNews from '../components/BreakingNews';
import AllNews from '../components/AllNews';
import All from '../components/AllNewsScreens/All';
import { fetchBreakingNews } from '../../api/newsdb';
import Loading from '../components/Loading';
import Entertainment from '../components/AllNewsScreens/Entertinment';


const { width, height } = Dimensions.get('window');

const Home = ({navigation}) => {
  const [breaking, setBreaking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBreakingNews();
  }, []);

  const getBreakingNews = async () => {
    try {
      const data = await fetchBreakingNews();
      console.log('got breaking news', data);

      if (data && data.articles) setBreaking(data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching breaking news:', error);
      setLoading(false);
    }
  };

  return (
    <View style={{ width: '100%', height: '100%', flex: 1, backgroundColor: 'white' }}>
      {/* StatusBar and Logo */}
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 4, marginLeft: 9 }}>
        <Bars3BottomLeftIcon size="40" strokeWidth={2} color="black" />
      </SafeAreaView>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 19, marginTop: 10 }}>
        <Text style={{ color: "#42C6A5", fontSize: 29, fontWeight: 'bold', marginHorizontal: 4, flex: 1, }}>
          <Text style={{ color: "#33354E", fontSize: 29, fontWeight: "bold", }}>Daily </Text>News
        </Text>
      </View>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
          {breaking.length > 0 && <BreakingNews data={breaking} navigation={navigation} />}

          
          <AllNews data={breaking}/>

          
          

          

        </ScrollView>
      )}

      
          
          
    </View>
  );
};

export default Home

const styles = StyleSheet.create({})