import { useLocation, Link, useNavigate } from 'react-router-dom';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/styledWrappers/PageBtnContainer';
import { useAllJobsContext } from '../pages/AllJobs';

function PageBtnContainer() {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  const pagination = Array.from(
    { length: numOfPages },
    (_, index) => index + 1
  );
  const handlePageNumber = (pageNumber) => {
    console.log(pageNumber);
  };

  return (
    <Wrapper>
      <button className="btn prev-btn">
        <HiChevronDoubleLeft />
        prev
      </button>

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

      <button className="btn next-btn">
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}

export default PageBtnContainer;
