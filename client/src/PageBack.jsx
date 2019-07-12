/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const PageBack = props => (
  <div>
    <li>
      <button type="button" className="pagesButton">
        <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>
          <i className="material-icons">navigate_before</i>
        </div>
      </button>
    </li>
  </div>
);

export default PageBack;