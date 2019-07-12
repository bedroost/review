/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const PageButton = (props) => {
  const {
    handlePageClick,
    pageValue,
  } = props;

  return (
    <li>
      <button type="button" className="pagesButton">
        <div className="buttonDiv" role="button" tabIndex="0" onClick={e => handlePageClick(e)}>{ pageValue }</div>
      </button>
    </li>
  );
};

export default PageButton;
