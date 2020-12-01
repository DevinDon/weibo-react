import { message } from 'antd';
import * as api from '../api/account';
import { ACCESS_TOKEN_KEY, UID_KEY } from '../constants';

export function getAccess(params = {}) {
  return async () => {
    try {
      const { access_token, uid } = await api.getAccess(params);
      localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
      localStorage.setItem(UID_KEY, uid);
      message.success('登录成功');
    } catch (e) {
      message.error('登录失败');
    }
    window.location.href = '/';
  };
}
