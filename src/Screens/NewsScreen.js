import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Dimensions, Image, StatusBar,  } from 'react-native';
import { ChevronLeftIcon, BookmarkIcon, ShareIcon } from 'react-native-heroicons/outline';
import Loading from '../components/Loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import Share from 'react-native-share'

const { width, height } = Dimensions.get('window');

const NewsScreen = () => {

    const publishedDate = item?.publishedAt ? item.publishedAt.slice(0, 10) : '';
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params || {};

  const [loading, setLoading] = useState(false);

  // Function to handle the share button press
  const handleShare = async () => {
    try {
      const options = {
        url: item.urlToImage,
      };
      await Share.open(options);
    } catch (error) {
      console.error('Error sharing content:', error);
    }
  };
  

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ flex: 1, backgroundColor: COLORS.white, width: '100%', height: '100%' }}
    >
      <StatusBar backgroundColor={COLORS.white} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 15,
          height: 30,
          marginTop: 13,
        }}
      >
        <TouchableOpacity
          style={{
            paddingBottom: 12,
            borderRadius: 19,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 22,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={26} strokeWidth={3.6} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <Loading />
      ) : (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={{ uri: item?.urlToImage }}
            style={{ width: '90%', height: height * 0.35, borderRadius: 100, borderWidth: 5, borderColor: COLORS.primary }}
            resizeMode="cover"
          />
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <Text style={{ color: COLORS.primary3, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
              {item?.title}
            </Text>
          </View>
        </View>
      )}

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          position: 'relative',
          width: '100%',
          height: '100%',
          marginTop: 30,
          borderTopRightRadius: 29,
          borderTopLeftRadius: 29,
          borderWidth:3,
          borderTopColor:COLORS.primary,
          borderLeftColor:COLORS.primary,
          borderRightColor:COLORS.primary,
          borderBottomColor:COLORS.white
        }}
      >
        {/* Save button */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: -20,
            right: 30,
            backgroundColor: COLORS.white,
            padding: 10,
            borderRadius: 50,
            shadowColor: COLORS.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            borderWidth: 1, borderColor: COLORS.primary
          }}
          onPress={handleShare}
        >
          <ShareIcon size={24} color={COLORS.primary} />
        </TouchableOpacity>

        {/* Share button */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: -20,
            right: 85,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 50,
            shadowColor: COLORS.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            borderWidth: 1, borderColor: COLORS.primary
          }}
          
        >
          <BookmarkIcon size={24} color={COLORS.primary}  />
        </TouchableOpacity>

        <View style={{ flex: 1, padding: 20 }}>
        <View style={{ width: '70%' }}>
        <View
      style={{
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 100,
        marginTop: 20,
        
        

      }}
    >
      <Image
        source={require('../../assets/profile.jpg')}
        style={{
          width: 50,
          height: 50,
          marginRight: 10,
          borderRadius: 100,
          borderWidth: 2, borderColor: COLORS.primary
        
        }}
        resizeMode="contain"
      />
      <View style={{ flex: 1 ,}}>
        <Text style={{ fontSize: 15, fontWeight: 'bold',color:COLORS.primary3 }}>{item?.author}</Text>
        <Text style={{ fontSize: 13, marginTop: 2,  }} >{item?.publishedAt ?(item?.publishedAt.length>10?item?.publishedAt.slice(0, 10) + '...' : item?.publishedAt) : ''}</Text>
      </View>
    </View>
    </View>


                <View >
                    <Text style={{ fontSize: 18, fontWeight: 'bold',color:COLORS.primary3 }}>{item?.title}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'semibold',color:COLORS.primary3 }}>{item?.description}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'semibold',color:COLORS.primary3 }}>{item?.content}</Text>
                    <Text>-{item?.author}</Text>
                    <Text>-{item?.publishedAt}</Text>
                </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsScreen;
