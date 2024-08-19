import {memo} from 'react';
import React, {ImageProps, Image as RNImage} from 'react-native';

export const Image = memo<ImageProps>(({source}) => (
  <RNImage source={source} />
));
