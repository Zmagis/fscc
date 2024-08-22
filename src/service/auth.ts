import {post} from './api';
import {Endpoint} from './endpoint';

export type LoginParams = {email: string; password: string};

export const login = async (data: LoginParams) => {
  try {
    const response = await post(Endpoint.login, {
      username: 'emilys',
      password: data.password,
    });

    return response.data;
  } catch (error) {
    return {error: error.response.status};
  }
};
