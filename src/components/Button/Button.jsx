import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

function Button({ onLoadMore, text }) {
  return (
    <button onClick={onLoadMore} className={styles.button} type="button">
      {text}
    </button>
  );
}

export default memo(Button);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
