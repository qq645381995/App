/**
 * 个人中心
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import Person from '../modules/Person';

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

let App = connect()( Person );

export default class AppPerson extends Component {
  static navigatorStyle = {
    navBarRightButtonColor: '#ccc',
    navBarLeftButtonColor: '#ccc',
    navBarHidden: true,
  };

  constructor(props){
    super(props);
  }
  render () {
    console.log(store.getState());
    return (
      <Provider store={ store } >
        <App navigator={this.props} />
      </Provider>
    )
  }
}
