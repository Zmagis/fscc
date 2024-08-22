import {memo} from 'react';
import React, {ImageProps, Image as RNImage} from 'react-native';

export const Image = memo<ImageProps>(({source, ...rest}) => (
  <RNImage resizeMode={'contain'} source={source} {...rest} />
));
