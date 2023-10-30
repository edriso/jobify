import Wrapper from '../assets/styledWrappers/JobInfo';

function JobInfo({ icon, text }) {
  return (
    <Wrapper>
      <span className="job-icon">{icon}</span>
      <span className="job-text">{text}</span>
    </Wrapper>
  );
}

export default JobInfo;
