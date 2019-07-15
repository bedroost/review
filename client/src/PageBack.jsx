/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from '../dist/style.css';

const PageBack = (props) => {
  const { handlePageBackClick } = props;

  return (
    <div>
      <li className={styles.pageListBack}>
        <button type="button" className={[styles.pagesButton, styles.navButton].join(' ')}>
          <div className={styles.buttonDivNav} role="button" tabIndex="0" onClick={() => handlePageBackClick()}>
            <i className="material-icons">navigate_before</i>
          </div>
        </button>
      </li>
    </div>
  );
};

export default PageBack;
