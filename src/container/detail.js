import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import format from 'format-duration';


class Detail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props?.route?.params;
    return (
      <ScrollView style={styles.container}>
          <View
            style={styles.subContainer}>
            <Text style={styles.artistHeading}>
              {item?.artistName}
            </Text>
            <Text style={styles.songHeading}>
              {item?.trackName}
            </Text>
          </View>
        <View style={styles.albumInfoContainer}>
          <View style={styles.albumDetail}>
            <Image
              style={styles.albumImage}
              source={{ uri: item?.artworkUrl100 }}
            />
            <View style={styles.albumNameDuration}>
              <Text style={styles.detailsHeading}>
                {'Album'}
              </Text>
              <Text style={styles.details}>
                {item?.collectionName ? item?.collectionName : 'No Name'}
              </Text>
              <Text style={styles.detailsHeading}>
                {'Duration'}
              </Text>
              <Text style={styles.details}>
                {format(item?.trackTimeMillis - 1000)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  subContainer: {
    flexDirection: 'column',
    paddingLeft: 19,
    paddingTop: 100
  },
  albumInfoContainer: {
    flex: 1,
    paddingLeft: 19,
    paddingRight: 19,
    marginTop: 70
  },
  albumDetail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 30
  },
  albumNameDuration: {
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'center',
    paddingRight: 10,
  },
  artistHeading: {
    color: 'white',
    fontSize: 35,
    fontWeight: '300',
    paddingBottom: 7,
    shadowOpacity: 0.6,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  songHeading: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    paddingBottom: 0,
    shadowOpacity: 0.6,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  albumImage: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 3,
    borderColor: 'white',
    marginRight: 25
  },
  detailsHeading: { 
    color: 'white', 
  marginBottom: 3 
  },
  details: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
    fontSize: 16
  },
})


export default Detail;
