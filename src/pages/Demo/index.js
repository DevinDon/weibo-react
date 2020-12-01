import { Spin } from 'antd';
import React from 'react';
import styles from '../../router/index.module.scss';

export const Demo = () => <>
  <div className={styles.spin}>
    <Spin size="large" />
  </div>
</>;

export default Demo;
