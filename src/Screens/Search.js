import { StyleSheet, Text, View,StatusBar,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react';
import{ MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';
import Loading from '../../src/components/Loading'



const Search = () => {
  const navigation=useNavigation();
  const[loading,setloading]=useState(false);
  const[results,setresults]=useState([]);
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
        <StatusBar backgroundColor="transparent"></StatusBar>
        <View style={{justifyContent:'space-between',
        alignItems:"center",
        flexDirection:"row",
        borderWidth:2,
        borderColor:"#42C6A5",
        marginTop:10,
        borderRadius:150,
        width:"90%",
        marginLeft:20,
        backgroundColor:"#33354E"
        


        }}>
           
          <MagnifyingGlassIcon size={28} strokeWidth={2} color="#42C6A5" style={{marginLeft:10}}/>
        
          <TextInput 
           placeholder='Search News'
           placeholderTextColor="#42C6A5"
          style={{
            flex: 1,
            paddingLeft: 20,
            paddingBottom: 10,
            fontWeight: "semibold",
            backgroundColor: "#33354E",
            color:"white",
            borderRadius:150,
            width:"70%"

          }}
          
          />
          <TouchableOpacity onPress={()=>navigation.navigate("Home")}
          style={{
            padding: 5,
            borderRadius: 9999,
            backgroundColor: "black",
            margin: 4,
          }}
        >
          <XMarkIcon size={28} strokeWidth={2} color="#42C6A5"  />
        </TouchableOpacity>

        </View>
        {
          loading?(
            <Loading/>
          ):(
            <View></View>
          )
        }
      
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})