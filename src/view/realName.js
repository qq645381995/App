/**
 * 实名认证页面
 * Param:  param
 * Return: {undefined}
 **/
import { StatusBar} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import RealName from '../modules/RealName';

function mapStateToProps (state) {
  return {
    name: 'liyuan'
  }
}
function mapDispatchToProps (dispatch) {
  return {
    nameDispatch: function () {alert('ok')}
  }
}

let RealNamePage = connect()( RealName );

export default class AppUserInfo extends Component {
  static navigatorStyle = {
    tabBarHidden: true,
  };

  constructor(props){
    super(props);
    this.props.navigator.setStyle({
      navBarButtonFontSize: 16, // Change font size nav bar buttons (eg. the back button) (remembered across pushes)
      navBarTextColor: styleConfig.$globalColorAssist,
      navBarButtonFontWeight: '100', // Change font weight nav bar buttons (eg. the back button) (remembered across pushes)
      navBarLeftButtonFontSize: 16, // Change font size of left nav bar button
      navBarLeftButtonColor: '#ccc', // Change color of left nav bar button
      navBarLeftButtonFontWeight: 100, // Change font weight of left nav bar button
    });
  }
  render () {
    return (
      <Provider store={ store } >
        <RealNamePage navigator={this.props} />
      </Provider>
    )
  }
}
