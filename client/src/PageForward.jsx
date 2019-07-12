/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const PageForward = () => (
  <div>
    <li>
      <button type="button" className="pagesButton">
        <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>
          <i className="material-icons">navigate_next</i>
        </div>
      </button>
    </li>
  </div>
);

export default PageForward;