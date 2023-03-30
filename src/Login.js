import './bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCircleNotch, faShoppingBag, faYen, faFaceMehBlank, faFaceGrimace, faAnchor, faAd, faAdd,
faAddressBook, faKiwiBird, faEnvelope, faPhone, faMapMarker, faGreaterThanEqual, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './Login.css'

function Login() {

return (
<>
<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="description" content="" />
<meta name="author" content="" />
<link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico" />
<title>Signin Template for Bootstrap</title>
<link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/sign-in/" />
{/* Bootstrap core CSS */}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" />
{/* Custom styles for this template */}
<link href="style.css" rel="stylesheet" />
{/* font awesome */}
{/*
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"> */}
{/* Login form */}

        <form className="form-signin bg-secondary d-flex flex-column align-items-center  opacity-75 p-3">
            <h1 ><FontAwesomeIcon icon={faUserCircle} color="black" fontSize={"69"}/></h1>

            <h1 className="h3 mb-3 font-weight-normal">Demat Account Login</h1>
            <label htmlFor="inputEmail">Email address</label>
            <input type="email" id="inputEmail" className="form-control m-2" placeholder="Email address" required="" autofocus="" />
            <label htmlFor="inputPassword">Password</label>
            <input type="password" id="inputPassword" className="form-control m-2" placeholder="Password" required="" />
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" defaultValue="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
                Login
            </button>
            {/* <p class="mt-5 mb-3 text-muted">&copy; 2021-2023</p> */}
        </form>
        {/* other login options */}
        <div className="text-center text-light bg-secondary opacity-75">
                <p>
                    Not a member? <a href="#!">Register</a>
                </p>
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1" fdprocessedid="750k7t">
                    <i className="fab fa-facebook-f" />
                </button>
                <h3 ><FontAwesomeIcon icon={faUserCircle} color="white" /></h3>

               
                <button type="button" className="btn btn-link btn-floating mx-1" fdprocessedid="4dm4ur">
                    <i className="fab fa-twitter" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1" fdprocessedid="e8wtxe">
                    <i className="fab fa-github" />
                </button>
        </div>
    


{/* copyright */}
<div>
    <p className="mt-3 mb-3 text-muted">© 2021-2023</p>
</div>
{/* test */}
{/* javascript font awesome */}
</>

);
}
export default Login;
