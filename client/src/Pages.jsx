/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PageButton from './PageButton';
import PageBack from './PageBack';
import PageForward from './PageForward';

const Pages = (props) => {
  const {
    totalReviews,
    currentPage,
    handlePageClick,
  } = props;

  const n = Math.ceil(totalReviews / 7);
  let pagesDisplayed;

  // if CP = 1
  // render button divs with CP, CP+1, CP+2, ..., n, >
  if (n >= 6) {
    if (currentPage === 1) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage + 2} />
          <li><div>...</div></li>
          <PageButton handlePageClick={handlePageClick} pageValue={n} />
          <PageForward />
        </div>
      );
    } else if (currentPage === 2) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <li><div>...</div></li>
          <PageButton handlePageClick={handlePageClick} pageValue={n} />
          <PageForward />
        </div>
      );
    } else if (currentPage === 3) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 2} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <li><div>...</div></li>
          <PageButton handlePageClick={handlePageClick} pageValue={n} />
          <PageForward />
        </div>
      );
    } else if (currentPage === 4) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 3} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 2} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <li><div>...</div></li>
          <PageButton handlePageClick={handlePageClick} pageValue={n} />
          <PageForward />
        </div>
      );
    } else if (currentPage > 4 && currentPage < (n - 3)) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack />
          <PageButton handlePageClick={handlePageClick} pageValue={1} />
          <li><div>...</div></li>
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <li><div>...</div></li>
          <PageButton handlePageClick={handlePageClick} pageValue={n} />
          <PageForward />
        </div>
      );
    } else if (currentPage === (n - 3)) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack />
          <PageButton handlePageClick={handlePageClick} pageValue={1} />
          <li><div>...</div></li>
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage + 2} />
          <PageButton handlePageClick={handlePageClick} pageValue={n} />
          <PageForward />
        </div>
      );
    } else if (currentPage === (n - 2)) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack />
          <PageButton handlePageClick={handlePageClick} pageValue={1} />
          <li><div>...</div></li>
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={n} />
          <PageForward />
        </div>
      );
    } else if (currentPage === (n - 1)) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack />
          <PageButton handlePageClick={handlePageClick} pageValue={1} />
          <li><div>...</div></li>
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton handlePageClick={handlePageClick} pageValue={n} />
          <PageForward />
        </div>
      );
    } else if (currentPage === n) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack />
          <PageButton handlePageClick={handlePageClick} pageValue={1} />
          <li><div>...</div></li>
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 2} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton handlePageClick={handlePageClick} pageValue={currentPage} />
        </div>
      );
    } else {
      pagesDisplayed = (
        <div>
          <div>Todo</div>
        </div>
      );
    }
  } else {
    pagesDisplayed = (
      <div>
        <div>Todo for cases n less than 6 </div>
      </div>
    );
  }

  return (
    <div className="pagesContainer">
      <nav className="pagesNav">
        <div>
          <ul>
            { pagesDisplayed }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Pages;
