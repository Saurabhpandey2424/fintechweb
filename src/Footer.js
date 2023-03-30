import './bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCircleNotch, faShoppingBag, faYen, faFaceMehBlank, faFaceGrimace, faAnchor, faAd, faAdd, faAddressBook, faKiwiBird, faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
  <div className="shortcode-html">
    {/* Footer */}
    <div className="container-fluid text-center g-color-white-opacity-0_8 m-1">
      <div className="row no-gutters g-min-height-80vh">
     
        {/* Footer Content */}
        <div className="col-md-6 col-lg-4 d-flex bg-primary text-light g-pa-40" >

          <div className="align-self-center">
            <header className="u-heading-v8-2 g-mb-40">
              <h2 className="u-heading-v8__title g-color-white text-uppercase g-font-weight-700 g-mb-0">
                <strong className="g-font-size-12 text-light bg-dark p-2 ">
                  Our Contacts
                </strong>
                <br /> <br />
                <span className="g-color-black-opacity-0_9">Get in</span>
                touch
              </h2>
            </header>
            <div className="lead g-font-weight-400 g-mb-40">
              <p>
                Aliquam dapibus quis sapien id pharetra. Vivamus iaculis est
                vitae libero tempus, in sollicitudin est consectetur porttitor
                iaculis pretium
              </p>
            </div>
            <address className="text-uppercase g-line-height-2 g-mb-40">
              <p>
                Email:
                <a className="g-color-white" href="mailto:marketing@unify.com">
                  <strong>info@htmlstream.com</strong>
                </a>
              </p>
              <p>
                Phone number:{" "}
                <strong className="g-color-white">+48 555 2566 112</strong>
              </p>
              <p>
                Address:{" "}
                <strong className="g-color-white">
                  In sed lectus tincidunt
                </strong>
              </p>
            </address>
            <ul className="list-inline mb-0">
              <li className="list-inline-item g-mx-5">
                <a
                  className="u-icon-v3 u-icon-size--sm g-font-size-default g-color-primary g-bg-white g-bg-black-opacity-0_9--hover"
                  href="#!"
                >
                  <h3><FontAwesomeIcon icon={faAddressBook} color="white" /></h3>
                </a>
              </li>
              <li className="list-inline-item g-mx-5">
                <a
                  className="u-icon-v3 u-icon-size--sm g-font-size-default g-color-primary g-bg-white g-bg-black-opacity-0_9--hover"
                  href="#!"
                >
                 <h3><FontAwesomeIcon icon={faEnvelope} color="white" /></h3>

                </a>
              </li>
              <li className="list-inline-item g-mx-5">
                <a
                  className="u-icon-v3 u-icon-size--sm g-font-size-default g-color-primary g-bg-white g-bg-black-opacity-0_9--hover"
                  href="#!"
                >
                  <h3><FontAwesomeIcon icon={faPhone} color="white" /></h3>

                </a>
              </li>
              <li className="list-inline-item g-mx-5">
                <a
                  className="u-icon-v3 u-icon-size--sm g-font-size-default g-color-primary g-bg-white g-bg-black-opacity-0_9--hover"
                  href="#!"
                >
                  <h3><FontAwesomeIcon icon={faMapMarker} color="white" /></h3>

                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End Footer Content */}
        {/* Footer Content */}
        <div className="col-md-6 col-lg-4 d-flex bg-dark">
          <div className="align-self-center w-100">
            <h2 className="text-uppercase fw-bolder m-2">
              {" "}
             ,<span className="text-light">Have a</span><div className="text-success">Question?</div>
            </h2>
            <form>
              <div className="form-group g-mb-10">
                <input
                  className="form-control  m-1 "
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group g-mb-10">
                <input
                  className="form-control  m-1 "
                  type="tel"
                  placeholder="Your phone"
                />
              </div>
              <div className="form-group g-mb-10">
                <input
                  className="form-control  m-1 "
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group g-mb-40">
                <textarea
                  className="form-control m-1 "
                  rows={5}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <button
                className="btn btn-primary fs-5 text-uppercase rounded-20 p-2 m-2"
                type="submit"
                role="button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* End Footer Content */}
      </div>
    </div>
    {/* Footer */}
    {/* Copyright */}
    <footer className="text-center g-py-40">
          <div className="m-2 text-center">
            <small className="g-font-size-default">
              © 2023 All right reserved.
            </small>
          </div>
    </footer>
    {/* End Copyright */}
  </div>
  <div className="shortcode-scripts">
    {/* JS Implementing Plugins */}
    {/* JS Unify */}
    {/* JS Plugins Init. */}
  </div>


</>

    );
}
export default Footer;