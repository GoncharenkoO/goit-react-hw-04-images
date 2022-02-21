import { memo } from 'react';
import { Circles } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './loaderComponent.module.css';

function LoaderComponent() {
  return (
    <div className={styles.overlay}>
      <Circles
        color="#3f51b5"
        height={80}
        width={80}
        ariaLabel="loading-indicator"
      />
    </div>
  );
}

export default memo(LoaderComponent);
