/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const PageButton = (props) => {
  const {
    currentPage,
    handlePageClick,
    pageValue,
  } = props;


  // toggle styling for button that reflects current page displayed
  let activeClass;

  if (currentPage === pageValue) {
    activeClass = "buttonDivNum activePage";
  } else {
    activeClass = "buttonDivNum";
  }

  return (
    <li className="pageList">
      <button type="button" className="pagesButton numButton">
        <div className={activeClass} role="button" tabIndex="0" onClick={e => handlePageClick(e)}>{ pageValue }</div>
      </button>
    </li>
  );
};

export default PageButton;
