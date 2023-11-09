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

      <div className="btn-container">
        {pagination.map((pageNum) => {
          return (
            <button
              key={pageNum}
              className={`btn page-btn ${
                pageNum === currentPage ? 'active' : ''
              }`}
              onClick={() => handlePageNumber(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

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
