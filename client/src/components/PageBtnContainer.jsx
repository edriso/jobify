import { useLocation, Link, useNavigate } from 'react-router-dom';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/styledWrappers/PageBtnContainer';
import { useAllJobsContext } from '../pages/AllJobs';

function PageBtnContainer() {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  const pagination = Array.from(
    { length: numOfPages },
    (_, index) => index + 1
  );

  const handlePageNumber = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPaginationBtn = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`btn page-btn ${activeClass ? 'active' : ''}`}
        onClick={() => handlePageNumber(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPaginationBtns = () => {
    const paginationBtns = [];

    // first page
    paginationBtns.push(
      addPaginationBtn({ pageNumber: 1, activeClass: currentPage === 1 })
    );

    // dots
    if (currentPage > 3) {
      paginationBtns.push(
        <span className="page-btn dots" key="dots-1">
          ...
        </span>
      );
    }

    // 1 page before current page
    if (currentPage !== 1 && currentPage !== 2) {
      paginationBtns.push(
        addPaginationBtn({
          pageNumber: currentPage - 1,
          activeClass: false,
        })
      );
    }

    // current page
    if (currentPage !== 1 && currentPage !== numOfPages) {
      paginationBtns.push(
        addPaginationBtn({
          pageNumber: currentPage,
          activeClass: true,
        })
      );
    }

    // 1 page after current page
    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      paginationBtns.push(
        addPaginationBtn({
          pageNumber: currentPage + 1,
          activeClass: false,
        })
      );
    }

    // dots
    if (currentPage < numOfPages - 2) {
      paginationBtns.push(
        <span className="page-btn dots" key="dots+1">
          ...
        </span>
      );
    }

    // last page
    paginationBtns.push(
      addPaginationBtn({
        pageNumber: numOfPages,
        activeClass: currentPage === numOfPages,
      })
    );

    return paginationBtns;
  };

  return (
    <Wrapper>
      {/* {currentPage > 1 && ( */}
      <button
        className="btn prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          handlePageNumber(prevPage < 1 ? numOfPages : prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      {/* )} */}

      <div className="btn-container">{renderPaginationBtns()}</div>

      {/* {currentPage < numOfPages && ( */}
      <button
        className="btn next-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          handlePageNumber(nextPage > numOfPages ? 1 : nextPage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button>
      {/* )} */}
    </Wrapper>
  );
}

export default PageBtnContainer;
