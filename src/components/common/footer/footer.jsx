import './footer.css';
function Footer() {
  // console.log('footer is called')
  return (
    <>
      <div className="footer  ">
        <div className="container ">
          <footer className="py-2">
            <div className="row ">
              <div className="col-md-12 col-lg-5  mb-3">
                <h5 className="heading">DevDiaries</h5>
                <p className="text-white text-opacity-50 text">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. rehenderit asperiores quo adipisci molestias
                  commodi officiis possimus?
                </p>
              </div>
              <div
                className="col col-lg-1 mb-3"
                style={{
                  fontSize: '1rem',
                  lineHeight: '2',
                }}
              >
                <h5 style={{ marginBottom: '22px', color: 'white' }}>World</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white text-opacity-75">
                      Politics
                    </a>
                  </li>

                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white text-opacity-75">
                      Tech
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white text-opacity-75">
                      Entertainment
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-1 mb-3 footer-column">
                <h5 className="heading">Tech</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white text-opacity-75">
                      Magazine
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white text-opacity-75">
                      StartUp
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white text-opacity-75">
                      Crypto
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="col col-lg-1 mb-3"
                style={{
                  fontSize: '1rem',
                  lineHeight: '2',
                }}
              >
                <h5 style={{ marginBottom: '22px', color: 'white' }}>Life</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white text-opacity-75">
                      Movie
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white text-opacity-75">
                      Music
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="col col-lg-1 mb-3"
                style={{
                  fontSize: '1rem',
                  lineHeight: '2',
                }}
              >
                <h5 style={{ marginBottom: '22px', color: 'white' }}>Magazine</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-white text-opacity-75">
                      Fasion
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-white text-opacity-75">
                      Blogger
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-white text-opacity-75">
                      People
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="col col-lg-1 mb-3"
                style={{
                  fontSize: '1rem',
                  lineHeight: '2',
                }}
              >
                <h5 style={{ marginBottom: '22px', color: 'white' }}>Other</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-white text-opacity-75">
                      About
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-white text-opacity-75">
                      Contact us
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-white text-opacity-75">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-1 my-0 border-top">
              <p className=" text-white ">© 2024 Company, Inc. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Footer;
