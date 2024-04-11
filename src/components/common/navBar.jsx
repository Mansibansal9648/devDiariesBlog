import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// function NavBar({ hideLink }) {
function NavBar({ hideLink }) {
  const location = useLocation();

  return (
    <>
      <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div class="bg-dark p-4">
          <h5 class="text-body-emphasis h4">Collapsed content</h5>
          <span class="text-body-secondary">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* {hideLink !== "/home" && <Link to="/home">Home</Link>}
          {hideLink !== "/myblog" && <Link to="/myblog"> My Blog</Link>} */}
          {location.pathname !== '/home' && <Link to="/home">Home</Link>}
          {location.pathname !== '/myblog' && <Link to="/myblog"> My Blog</Link>}
        </div>
      </nav>
    </>
  );
}
export default NavBar;
