import React, { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { useStyle } from 'react-native-style-utilities';

function reRender(prevProps, nextProps) {
  if(prevProps.source.uri !== nextProps.source.uri)
    return false
  
  return true
}

export const FImage = ({resizeMode, width, height, source, style}) => {
    
    const _style = useStyle(() => ({width: width || "100%", height: height || "100%"}), [width, height])
    const __style = (typeof style == 'object')?style:{}

    return (
    <FastImage
      style={{..._style, ...__style}}
      source={{
        ...source,
        headers: { Authorization: 'someAuthToken' },
        priority: FastImage.priority.normal,
      }}
      resizeMode={resizeMode || FastImage.resizeMode.contain}
    />)
  }

  export default React.memo(FImage, reRender)