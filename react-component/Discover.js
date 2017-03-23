
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';

let AD_IMG = [ {uri: 'https://c.biketo.com//Uploads/gg/5716d80c0f41c.jpg'},
               {uri: 'https://c.biketo.com//Uploads/gg/568b32e522f13.jpg'},
               {uri: 'https://c.biketo.com//Uploads/gg/565419c01fde9.jpg'} ];

export default class Discover extends Component {
  _onPressButton() {
    // Alert.alert('title ...', 'message');
    console.log('testing ...');
  }
  render() {
      return (
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.adImageViewContainer}>
              <TouchableOpacity onPress={this._onPressButton}>
                <Image source={AD_IMG[0]} style={styles.firstImage} />
              </TouchableOpacity>
              <View style={styles.flexContainer}>
                <Image source={AD_IMG[1]} style={styles.flexImage} />
                <Image source={AD_IMG[2]} style={styles.flexImage} />
              </View>
            </View>

            <Text style={styles.columnNamelabel}>精选频道</Text>

            <View style={styles.listViewContainer}>
              <TouchableOpacity onPress={this._onPressButton}>
              <View style={styles.listViewCell}>
                <Image style={styles.listViewCellIcon} source={require('./Resource/icon_share_weibo.png')} />
                <Text style={styles.listViewCellLabel}>车店</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.listViewCell}>
                <Image style={styles.listViewCellIcon} source={require('./Resource/icon_share_weixin.png')} />
                <Text style={styles.listViewCellLabel}>易购</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.listViewCell}>
                <Image style={styles.listViewCellIcon} source={require('./Resource/icon_share_weixin_friendship.png')} />
                <Text style={styles.listViewCellLabel}>路线</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.listViewCell}>
                <Image style={styles.listViewCellIcon} source={require('./Resource/icon_share_weixin.png')} />
                <Text style={styles.listViewCellLabel}>租车</Text>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f7f7f7'
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  adImageViewContainer: {
    marginTop: 10,
  },
  firstImage: {
    width: Dimensions.get('window').width -20, height: 80,marginLeft: 10,
    marginRight:10,
  },
  flexContainer: {
    flexDirection: 'row',
    paddingLeft:10,
  },
  flexImage: {
    flex:1,
    height: 100,
    resizeMode: Image.resizeMode.contain,
    marginRight: 10
  },
  columnNamelabel: {
    fontSize: 13,
    color: '#b6b6b6',
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  listViewContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff'
  },
 listViewCell: {
   flexDirection: 'row',
   height: 80,
   alignItems: 'center',
   marginLeft: 20, marginRight: 20,
   borderBottomWidth: 0.35, borderColor: '#bebebe',
 },
 listViewCellLabel: {
   fontSize: 16,
   paddingLeft: 10,
   color: 'black',
   width: 300
 },
 listViewCellIcon: {
   width: 40, height: 40
 }

});
