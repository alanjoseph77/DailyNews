import { StyleSheet, Text, View,Image,Animated,TouchableOpacity } from 'react-native'
import React from 'react'
import Home from '../Screens/Home';
import Sports from '../Screens/Sports'

import Search from '../Screens/Search'

import { SIZES,FONTS,COLORS,constants } from '../../constants';




const bottom_tabs = constants.bottom_tabs.map((bottom_tab) => ({
  ...bottom_tab,
  ref: React.createRef() // Fixed the typo here
}));

const BottomButtom = () => {
  
  const flatlistRef=React.useRef();
  const scrollX=React.useRef(new Animated.Value(0)).current;
  
  
  function renderContent(){
    return(
      <View style={{flex:1}}>
        <Animated.FlatList
        ref={flatlistRef}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        data={constants.bottom_tabs}
        keyExtractor={item=>`main-${item.id}`}
        onScroll={Animated.event([
          {
            nativeEvent:{contentOffset:{x:scrollX}}
          }
        ],{
          useNativeDriver:false

        })
      }
      renderItem={({item,index})=>{
        return(
          <View style={{height:SIZES.height,width:SIZES.width}}>
            {
              item.label==constants.screens.home&&<Home/>
              
            }
             {
              item.label==constants.screens.search&&<Search/>
              
            }
             {
              item.label==constants.screens.profile&&<Sports/>
              
            }

          </View>
        )
      }}
        />

      </View>
    )
  }

  function renderBottomTab(){
    return(
      <View style={{marginBottom:20,
      paddingHorizontal:SIZES.padding,
      paddingVertical:SIZES.radius
       }}>

        <View style={{flex:1,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.primary3}}></View>

      </View>
    )
  }
  return (
    <View style={{flex:1,backgroundColor:"green"}}>

      {renderContent()}

      {renderBottomTab()}
      
    </View>
  )
}

export default BottomButtom

const styles = StyleSheet.create({})