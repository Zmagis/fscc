import {LayoutAnimation, Platform, UIManager} from 'react-native';

export const layoutAnimation = () => {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};
