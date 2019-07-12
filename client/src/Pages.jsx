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
    handlePageBackClick,
    handlePageForwardClick,
  } = props;

  const n = Math.ceil(totalReviews / 7);
  let pagesDisplayed;

  // page buttons will render depending on:
  // max number of pages and current page state
  if (n >= 6) {
    if (currentPage === 1) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage + 2} />
          <li><div>...</div></li>
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={n} />
          <PageForward handlePageForwardClick={handlePageForwardClick} />
        </div>
      );
    } else if (currentPage === 2) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack handlePageBackClick={handlePageBackClick} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <li><div>...</div></li>
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={n} />
          <PageForward handlePageForwardClick={handlePageForwardClick} />
        </div>
      );
    } else if (currentPage === 3) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack handlePageBackClick={handlePageBackClick} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 2} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <li><div>...</div></li>
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={n} />
          <PageForward handlePageForwardClick={handlePageForwardClick} />
        </div>
      );
    } else if (currentPage === 4) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack handlePageBackClick={handlePageBackClick} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 3} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 2} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <li><div>...</div></li>
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={n} />
          <PageForward handlePageForwardClick={handlePageForwardClick} />
        </div>
      );
    } else if (currentPage > 4 && currentPage < (n - 3)) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack handlePageBackClick={handlePageBackClick} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={1} />
          <li><div>...</div></li>
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <li><div>...</div></li>
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={n} />
          <PageForward handlePageForwardClick={handlePageForwardClick} />
        </div>
      );
    } else if (currentPage === (n - 3)) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack handlePageBackClick={handlePageBackClick} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={1} />
          <li><div>...</div></li>
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage + 2} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={n} />
          <PageForward handlePageForwardClick={handlePageForwardClick} />
        </div>
      );
    } else if (currentPage === (n - 2)) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack handlePageBackClick={handlePageBackClick} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={1} />
          <li><div>...</div></li>
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage + 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={n} />
          <PageForward handlePageForwardClick={handlePageForwardClick} />
        </div>
      );
    } else if (currentPage === (n - 1)) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack handlePageBackClick={handlePageBackClick} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={1} />
          <li><div>...</div></li>
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={n} />
          <PageForward handlePageForwardClick={handlePageForwardClick} />
        </div>
      );
    // final case: currentPage === n
    } else {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack handlePageBackClick={handlePageBackClick} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={1} />
          <li><div>...</div></li>
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 2} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage - 1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={currentPage} />
        </div>
      );
    }
  } else if (n === 2) {
    if (currentPage === 1) {
      pagesDisplayed = (
        <div className="pagesList">
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={2} />
          <PageForward handlePageForwardClick={handlePageForwardClick} />
        </div>
      );
    // else currentPage === n
    } else {
      pagesDisplayed = (
        <div className="pagesList">
          <PageBack handlePageBackClick={handlePageBackClick} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={1} />
          <PageButton currentPage={currentPage} handlePageClick={handlePageClick} pageValue={2} />
        </div>
      );
    }
  } else if (n === 1) {
    pagesDisplayed = null;
  } else {
    pagesDisplayed = (
      <div>
        <div>Todo for cases n = 3, 4, and 5 </div>
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
