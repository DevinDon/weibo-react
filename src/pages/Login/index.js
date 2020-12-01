import { getAccess } from 'actions/account';
import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch } from 'redux-react-hook';

const Login = () => {
  const dispatch = useDispatch();
  const { query: { code } } = queryString.parseUrl(window.location.href);
  useEffect(() => {
    if (code) {
      dispatch(getAccess({ code }));
    }
  }, [code, dispatch]);
  return <div>{code}</div>;
};

export default Login;
