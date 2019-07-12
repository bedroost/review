/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Pages = (props) => {
  const {
    totalReviews,
    currentPage,
  } = props;

  const n = Math.ceil(totalReviews / 7);
  let pagesDisplayed;

  // if CP = 1
  // render button divs with CP, CP+1, CP+2, ..., n, >
  if (currentPage === 1) {
    pagesDisplayed = (
      <div className="pagesList">
        <li>
          <button type="button" className="pagesButton">
            <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>1</div>
          </button>
        </li>

        <li>
          <button type="button" className="pagesButton">
            <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>{ currentPage + 1 }</div>
          </button>
        </li>

        <li>
          <button type="button" className="pagesButton">
            <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>{ currentPage + 2 }</div>
          </button>
        </li>

        <li><div>...</div></li>

        <li>
          <button type="button" className="pagesButton">
            <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>{ n }</div>
          </button>
        </li>

        <li>
          <button type="button" className="pagesButton">
            <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>
              <i className="material-icons">navigate_next</i>
            </div>
          </button>
        </li>

      </div>
    );
  } else {
    pagesDisplayed = (
      <div>
        <div>Beep</div>
      </div>
    );
  }

  return (
    <div className="pagesContainer">
      <nav className="pagesNav">
        <div>
          <ul>
            { pagesDisplayed }
            { /* <li>
              <button type="button" className="pagesButton">
                <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>1</div>
              </button>
            </li>
            <li>
              <button type="button" className="pagesButton">
                <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>2</div>
              </button>
            </li>
            <li>
              <button type="button" className="pagesButton">
                <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>3</div>
              </button>
            </li>
            <li><div>...</div></li>
            <li>
              <button type="button" className="pagesButton">
                <div className="buttonDiv" role="button" tabIndex="0" onClick={e => props.handlePageClick(e)}>4</div>
              </button>
            </li> */ }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Pages;
