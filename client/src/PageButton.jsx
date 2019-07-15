/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from '../dist/style.css';

const PageButton = (props) => {
  const {
    currentPage,
    handlePageClick,
    pageValue,
  } = props;


  // toggle styling for button that reflects current page displayed
  let activeClass;

  if (currentPage === pageValue) {
    activeClass = styles.buttondivnumActivepage;
  } else {
    activeClass = styles.buttondivnum;
  }

  return (
    <li className={styles.pageList}>
      <button type="button" className={[styles.pagesButton, styles.numButton].join(' ')}>
        <div className={activeClass} role="button" tabIndex="0" onClick={e => handlePageClick(e)}>{ pageValue }</div>
      </button>
    </li>
  );
};

export default PageButton;
