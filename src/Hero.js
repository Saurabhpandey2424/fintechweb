import './bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCircleNotch, faShoppingBag, faYen, faFaceMehBlank, faFaceGrimace, faAnchor, faAd, faAdd, faAddressBook, faKiwiBird, faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'
import Login from './Login'
function Hero() {
    const myImageStyle = { width: "100%", height: "100vh" };
    return (
        <>
            <div className="logo d-flex justify-content-around"> 
              <div className="m-5 d-flex flex-column align-items-center">
                <div>
               <a class="btn btn-success fs-4 m-4 rounded-4"  href="#" role="button">Mutual Funds</a>
               </div>
               <br />
               <div><a class="btn btn-primary fs-4 m-4 rounded-4" href="#" role="button">Stocks</a>
               </div>
               <div className=' collapse ram d-flex flex-column  mt-5'>
                   <h2 className='ram fw-Bolder text-black'> BE A OWNER !!  </h2>
                      <p className='text-light'>Be wise in choice, as UPDOWNs is gona give you the best price</p>
               </div>
               </div>
               <div className="m-4"><Login /></div>
               
            </div>
            
            {/* <img style={myImageStyle} src = {require()} className ="opacity-75"/> */}
        </>

    );
}
export default Hero;