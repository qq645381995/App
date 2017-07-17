/**
 * 购物车页面
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store/store';
import styleConfig from '../config/config-styles';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';
import ShoppingCarComponent from '../modules/ShoppingCar';
import { updateMyShoppingCarList } from '../redux/reducer/user';

function mapStateToProps (state) {
  return {
    goodsSourceData: state.user.toJS().myShoppingCars
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateMyShoppingCarList: compose( dispatch, updateMyShoppingCarList)
  };
}

let AppShoppingCar = connect(mapStateToProps,
                             mapDispatchToProps)( ShoppingCarComponent );

export default class ShoppingCar extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        buttonColor: '#ccc',
        buttonFontSize: 12,
        buttonColor: 'styleConfig.$globalColorAssist',
        id: 'edit',
        title: '编辑'
      }
    ]
  };

  static navigatorStyle = {
    navBarRightButtonColor: '#ccc',
    navBarLeftButtonColor: '#ccc'
  }

  constructor(props){
    super(props);
  }
  render () {
    return (
      <Provider store={ store } >
        <AppShoppingCar navigator={this.props} />
      </Provider>
    );
  }
}
