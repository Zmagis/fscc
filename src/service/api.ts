import axios from 'axios';
import {Platform} from 'react-native';

const BASE_URL = 'https://dummyjson.com';

export const post = (endpoint: string, data) =>
  axios.post(`${BASE_URL}${endpoint}`, data, {
    headers: {
      'FSCC-PLATFORM': Platform.OS,
      'FSCC-PLATFORM-VERSION': Platform.Version,
    },
  });
