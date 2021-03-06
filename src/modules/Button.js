/**
 * 按钮组件页面
 * Param:  param
 * Return: {undefined}
 **/
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styleConfig, { globalStyle } from '../config/config-styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';

/**
 * 登录不带图标button
 * Param:  param
 * Return: { undefined }
 **/
export function LoginButton ({
  bgc,
  onPress,
  style,
  disabled
}) {
  return (
          <Button
            style={[{backgroundColor: bgc,
                    borderColor: bgc,
                    height: 36,
                    width: '100%',
                    borderRadius: 5
            }, style]}
            textStyle={ styles.verifyButton }
            disabledStyle={styles.disabledStyle}
            onPress={onPress}
            isDisabled={ disabled }
            textStyle={{fontSize: 1*styleConfig.rem, color: styleConfig.$globalWhite}}
            >
            确定
            </Button>
  )
}

export function ProColorMessageButton ({
  text
}) {
  return (
    <View style={styles.hintBox}>
      <Text style={[globalStyle.bgcp, styles.goodsHintPer]}>{ text }</Text>
    </View>
  );
}

export class SearchKeyWordButton extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render () {
    let { keyWords, index } = this.props;
    let buttonStyle = () => { if(index <= 2){ return styles.searchHintButtonHot}else{return styles.searchHintButtonDefaile} }
    let textStyle = () => { if (index  <= 2 ) {
      return { color : '#ff2764'};
    }else{
      return { color : styleConfig.$globalColorAssist};
    }
                         };
    return(
      <View style={{}}>
      <TouchableOpacity
        style={ [ buttonStyle(), globalStyle.fzd8] }
        onPress={ () => alert('ok')}
        >
        <Text
          style={ [textStyle() ,  globalStyle.fzd8, globalStyle.lh1] }
          >{ keyWords.text }</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

export function ElipseButton ({onPress,
                               text,
                               color,
                               textColor,
                               data}) {
  return (
    <TouchableOpacity style={[styles.grayButton, {borderColor: color}]}
                      onPress={ () => onPress( data ) }>
      <Text style={[styles.grayButtonText, { color: textColor }]}>{ text }</Text>
    </TouchableOpacity>
  )
}

export function OrderButton ({color, onPress, text, item, type}) {
  if(color === 'gray') {
    return (
      <ElipseButton
        onPress={ onPress }
        type={type}
        data={ item }
        text={ text }
        color='#D0D0D0'
        textColor={styleConfig.$globalColorAssist}
        />
    );
  }else if(color === 'red') {
    return (
      <ElipseButton
        onPress={ onPress }
        data={ item }
        type={type}
        text={ text }
        color={styleConfig.$globalColorPro}
        textColor={styleConfig.$globalColorPro}
        />
    );
  }
}

const styles = EStyleSheet.create({
  disabledStyle: {
    backgroundColor: '#DCD2D1',
    borderColor: '#DCD2D1'
  },
  grayButtonText: {
    lineHeight: '1.8rem',
    fontSize: '0.8rem'
  },
  grayButton: {
    borderWidth: 1,
    borderStyle: 'solid',
    width: '4rem',
    height: '1.8rem',
    overflow: 'hidden',
    borderRadius: '1.8rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintBox: {
    paddingLeft: '0.2rem',
    paddingRight: '0.2rem',
    backgroundColor: '$globalColorPro',
    paddingBottom: '0.25rem',
    paddingTop: '0.25rem',
    marginLeft: '0.3rem',
    marginTop: '0.3rem'
  },
  searchHintButtonHot: {
    paddingTop: '0.4rem',
    paddingBottom: '0.4rem',
    paddingLeft: '0.4rem',
    paddingRight: '0.4rem',
    backgroundColor: '#f7eeef',
    marginTop: '0.4rem',
    marginRight: '1rem'
  },
  searchHintButtonDefaile: {
    paddingTop: '0.4rem',
    paddingBottom: '0.4rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    backgroundColor: '$globalBgc',
    marginTop: '0.5rem',
    marginRight: '0.5rem'
  },
  goodsHintPer: {
    textAlign: 'center',
    lineHeight: '1rem',
    fontSize: '0.8rem',
    color: '$globalWhite'
  }
})
