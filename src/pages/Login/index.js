import { getAccess } from 'actions/account';
import { Spin } from 'antd';
import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch } from 'redux-react-hook';
import styles from '../../router/index.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const { query: { code } } = queryString.parseUrl(window.location.href);
  useEffect(() => {
    code && dispatch(getAccess({ code }));
  }, [code, dispatch]);
  return <div className={styles.spin}>
    <Spin size="large" />
    <p>登录中，请稍候……</p>
  </div>;
};

export default Login;
