'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity,
} from 'react-native';
import styleConfig from '../config/config-styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './home';
import Person from './person';
import Login from './login';
import GoodsDetail from '../view/goodsDetail';

const homeIconSize = 26;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'home'
    };
  }

  componentWillMount() {
  }

  _renderContent(color, pageText) {
    return (
      <View style={{marginTop: 20}}>
        <Text>hahaha</Text>
      </View>
    );
  }

  render() {
    return (
      <TabBarIOS
      tintColor={ styleConfig.$globalColorPro }
      style={styles.tabBar}
      barTintColor={ styleConfig.$globalWhite}
        >
        <Icon.TabBarItemIOS
          title="首页"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          iconSize={homeIconSize}
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home'
            });
          }}>
          <Home />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="分类"
          iconName="ios-keypad"
          selectedIconName="ios-keypad"
          iconSize={homeIconSize}
          selected={this.state.selectedTab === 'class'}
          onPress={() => {
            this.setState({
              selectedTab: 'class'
            });
          }}>
        <GoodsDetail />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="购物车"
          iconName="ios-cart-outline"
          selectedIconName="ios-cart-outline"
          iconSize={homeIconSize}
          selected={this.state.selectedTab === 'starred'}
          onPress={() => {
            this.setState({
              selectedTab: 'starred'
            });
          }}>
        <Login />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="我的"
          iconName="md-person"
          selectedIconName="md-person"
          iconSize={homeIconSize}
          selected={this.state.selectedTab === 'person'}
          onPress={() => {
            this.setState({
              selectedTab: 'person'
            });
          }}>
          <Person />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}
let styles = EStyleSheet.create({
  tabBar: {
  }
})
