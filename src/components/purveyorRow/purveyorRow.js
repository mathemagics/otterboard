import React from 'react';
import { View, Image, Text } from 'react-native';

import gfs from '../../images/gfs.jpeg';
import jimkoo from '../../images/jimkoo.jpg';
import yenbros from '../../images/yenbros.jpg';
import dairyland from '../../images/dairyland.png';
import sysco from '../../images/sysco.png';
import oyama from '../../images/oyama.jpg';

import { rowStyle, imageStyle, titleStyle } from './styles';

export default (props) => {
  const { name } = props.purveyor;
  let imgSrc;
  switch(name) {
    case 'Yen Brothers': imgSrc = yenbros;
    break;
    case 'Jim Koo Produce': imgSrc = jimkoo;
    break;
    case 'Gordon Food Services': imgSrc = gfs;
    break;
    case 'Dairyland': imgSrc = dairyland;
    break;
    case 'Sysco': imgSrc = sysco;
    break;
    case 'Oyama Sausages': imgSrc = oyama;
    break;
    default: break;
  }
  return (
    <View style={rowStyle}>
      <Image style={imageStyle} source={imgSrc} />
      <Text style={titleStyle}>{name}</Text>
    </View>
  );
}
