import * as React from 'react';
import { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image } from 'react-native';

export default class ProfilePage extends Component{



  renderItem = () => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemWrapper}>
          <Image
            source={{uri:''}}
            style={styles.itemAvatar}
          />
          <View>

          </View>
        </View>
      </View>
    )
  };

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
        <FlatList
          data={[{},{}]}
          keyExtractor={(item,index) => `${index}`}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  itemContainer:{
    marginHorizontal:8,
    marginVertical:10,
    padding:13,
    backgroundColor:'white',
    borderRadius: 5
  },
  itemWrapper:{
    flexDirection:'row'
  },
  itemAvatar:{
    width:global.px2dp(72),
    height:global.px2dp(72),
    borderRadius:global.px2dp(36),
    backgroundColor: 'red'
  }
});
