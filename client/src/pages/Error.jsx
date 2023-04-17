import { Link } from 'react-router-dom';
import Wrapper from '../assets/styledWrappers/ErrorPage';
import notFound from '../assets/images/not-found.svg';

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFound} alt="not found" />
        <h3>Page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back to home</Link>
      </div>
    </Wrapper>
  );
}
export default Error;
