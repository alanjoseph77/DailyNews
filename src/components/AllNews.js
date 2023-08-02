import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, } from '../../constants/theme';

const AllNews = ({}) => {
  const navigation = useNavigation();
  const categories = ['All', 'Sports', 'Entertainment', 'Politics', 'Health', 'India'];

  const handleCategoryPress = (category) => {
    if (category === 'All') {
      navigation.navigate('All', { category });
    } else if (category === 'Sports') {
      navigation.navigate('Sportsn',{ category });
    } else if (category === 'Entertainment') {
      navigation.navigate('Entertainment');
    } else if (category === 'Politics') {
      navigation.navigate('Politics');
    } else if (category === 'Health') {
      navigation.navigate('Health');
    } else if (category === 'India') {
      navigation.navigate('India');
    }
  };

  return (
    <ScrollView 
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={styles.scrollViewContent}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryItem}
          onPress={() => handleCategoryPress(category)}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  categoryItem: {
    backgroundColor: COLORS.primary,
    marginRight: 10,
    padding: 10,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color:COLORS.primary3
  },
});

export default AllNews;



// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { COLORS,FONTS } from '../../constants/theme';

// const AllNews = ({data,item}) => {
//   const navigation = useNavigation();

  // const categories = [
  //   { id: 1, title: 'All' },
  //   { id: 2, title: 'Sports' },
  //   { id: 3, title: 'Entertainment' },
  //   { id: 4, title: 'Health' },
  //   { id: 5, title: 'India' },
  //   { id: 6, title: 'Politics' },
    
  // ];

//   const handleCategoryPress = (categoryTitle) => {
//     if (categoryTitle === 'All') {
//       navigation.navigate('All'); 
//     } else if (categoryTitle === 'Sports') {
//       navigation.navigate('Sports'); 
//     } else if (categoryTitle === 'Entertainment') {
//       navigation.navigate('Entertainment'); 
//     } else if (categoryTitle === 'Health') {
//       navigation.navigate('Health'); 
//     } else if (categoryTitle === 'Politics') {
//       navigation.navigate('Politics'); 
//     } else if (categoryTitle === 'India') {
//       navigation.navigate('India'); 
//     } else {
//       // Handle the case when the category title doesn't match any of the above conditions.
//     }
//   };
  

//   return (
//     <ScrollView
    
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.scrollViewContent}
//     >
//       {categories.map((category) => (
//         <TouchableOpacity
//           key={category.id}
//           style={styles.categoryItem}
//           onPress={() => handleCategoryPress(category.title)}
//         >
//           <Text style={styles.categoryText}>{category.title}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollViewContent: {
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//   },
//   categoryItem: {
//     backgroundColor: COLORS.primary,
//     marginRight: 10,
//     padding: 10,
//     borderRadius: 8,
    
//   },
//   categoryText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color:COLORS.primary3,
//     fontFamily:"Roboto-Black"
//   },
// });

// export default AllNews;
