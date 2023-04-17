import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
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
          <div className="btn btn-hero">Login/Register</div>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
}
export default Landing;
