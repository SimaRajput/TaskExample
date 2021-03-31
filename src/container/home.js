import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text
} from 'react-native';
import { RowItem } from '../components';
const BASE_URL = 'https://itunes.apple.com/search?term=Michael+jackson'


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songsData: [],
    }
  }

  componentDidMount() {
    this.getSongsData();
   }


  getSongsData = async () => {
    try {
      let response = await fetch(
        BASE_URL)
      let json = await response.json();
      this.setState({ songsData: json })
    } catch (error) {
      console.error(error);
    }
  };

  onSelect = (item) => {
    const { navigation: { navigate } } = this.props;
    navigate('Detail', { item })
  }

  renderItem = ({ item }) => {
    return (
      <RowItem item={item} onPress={() => this.onSelect(item)} />
    )
  }

  ItemSeparatorComponent = () => {
    return (
      <View style={styles.lineSep}></View>
    )
  }

  render() {
    const { songsData } = this.state;
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={songsData.results}
          extraData={songsData.results}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.ItemSeparatorComponent}
          keyExtractor={item => item?.trackId}
          ListEmptyComponent={() =>
          <View style={styles.indicator}>
            <ActivityIndicator
            color='#29ABE2'
            size="large"
            style={styles.activityIndicator}
          /><Text style={styles.text}>{'Please wait...'}</Text>
          </View>}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'black'
  },
  item: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  lineSep: {
    height: 1,
    backgroundColor: 'lightgray'
  },

  indicator:{
   justifyContent:'center',
   alignItems:'center',
   flex:1
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
  },
  text: {
    paddingVertical: 5,
    color:'#29ABE2'
  },

})


export default Home;
