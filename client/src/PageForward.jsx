/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const PageForward = (props) => {
  const { handlePageForwardClick } = props;

  return (
    <div>
      <li className="pageListForward">
        <button type="button" className="pagesButton navButton">
          <div className="buttonDivNav" role="button" tabIndex="0" onClick={() => handlePageForwardClick()}>
            <i className="material-icons">navigate_next</i>
          </div>
        </button>
      </li>
    </div>
  );
};

export default PageForward;
