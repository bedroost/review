/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from '../dist/style.css';

const PageForward = (props) => {
  const { handlePageForwardClick } = props;

  return (
    <div>
      <li className={styles.pageListForward}>
        <button type="button" className={`${styles.pagesButton} ${styles.navButton}`}>
          <div className={styles.buttonDivNav} role="button" tabIndex="0" onClick={() => handlePageForwardClick()}>
            <i className="material-icons">navigate_next</i>
          </div>
        </button>
      </li>
    </div>
  );
};

export default PageForward;
