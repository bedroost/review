/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const PageBack = (props) => {
  const { handlePageBackClick } = props;

  return (
    <div>
      <li>
        <button type="button" className="pagesButton navButton">
          <div className="buttonDivNav" role="button" tabIndex="0" onClick={() => handlePageBackClick()}>
            <i className="material-icons">navigate_before</i>
          </div>
        </button>
      </li>
    </div>
  );
};

export default PageBack;
