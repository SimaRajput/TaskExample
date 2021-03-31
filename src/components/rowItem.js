import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const ItemContainer = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer} >
      <View style={styles.subContainer}>
        <Image resizeMode='cover' style={styles.image} source={{ uri: item?.artworkUrl100 }}></Image>
        <View style={styles.infoConatiner}>
        <Text style={styles.text}>{item?.trackName?item?.trackName:'No Name'}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.key}>{'Artist Name'}</Text>
          <Text style={styles.value}>{item?.artistName}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

}
export default ItemContainer;

const styles = StyleSheet.create({
    key: {
    paddingVertical: 5,
    fontWeight: 'bold',
    color:'#29ABE2'
  },
  value: {
    paddingVertical: 8,
    color:'#29ABE2',
    position:'absolute',
    left:100,
    fontSize:12
  },
  text: {
    paddingVertical: 5,
    color:'#29ABE2'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius:4
  },
  itemContainer: {
    padding: 10,
    backgroundColor:'black'
  },
  infoConatiner: {
    justifyContent: 'center',
    marginLeft: 10
  },
  subContainer: {
    flexDirection: 'row'
  },
})