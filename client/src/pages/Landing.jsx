import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/styledWrappers/LandingPage';
import { Logo } from '../components';

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Try-hard gentrify truffaut church-key. Ramps art party 3 wolf moon
            DIY, disrupt raclette fingerstache austin. DSA gentrify chillwave
            +1. Pinterest kickstarter distillery cray Brooklyn selfies glossier
            man braid disrupt. Occupy chia tofu vaporware dreamcatcher try-hard.
            Pinterest vinyl kogi bodega boys.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
