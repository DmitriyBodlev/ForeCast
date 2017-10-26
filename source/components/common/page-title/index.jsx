import React from 'react';
import styles from './ui';

const PageTitleComponent = (props: Object) => (
  <div className={styles.wrapper}>
    {props.title}
  </div>
);

export default PageTitleComponent;
