import { Link, Form } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import Wrapper from '../assets/styledWrappers/Job';
import JobInfo from './JobInfo';
day.extend(advancedFormat);

function Job({
  _id,
  company,
  position,
  jobLocation,
  jobStatus,
  jobType,
  createdAt,
}) {
  const date = day(createdAt).format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="i">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>

        <footer className="actions">
          <Link to={`../edit-job/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-job/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
}

export default Job;
