import React from 'react';

const Pages = props => (
  <div className="pagesContainer">
    <nav className="pagesNav">
      <div>
        <ul className="pagesList">
          <li>
            <button type="button" className="pagesButton">
              <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>1</div>
            </button>
          </li>
          <li>
            <button type="button" className="pagesButton">
              <div className="buttonDiv">2</div>
            </button>
          </li>
          <li>
            <button type="button" className="pagesButton">
              <div className="buttonDiv">3</div>
            </button>
          </li>
          <li><div>...</div></li>
          <li>
            <button type="button" className="pagesButton">
              <div className="buttonDiv">10</div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </div>

);

export default Pages;
