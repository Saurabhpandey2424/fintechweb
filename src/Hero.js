import './bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCircleNotch, faShoppingBag, faYen, faFaceMehBlank, faFaceGrimace, faAnchor, faAd, faAdd, faAddressBook, faKiwiBird, faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

function Hero() {
    const myImageStyle = { width: "100%", height: '600px' };
    return (
        <>
            <img style={myImageStyle} src = {require('./heroimage1.jpg')}/>
        </>

    );
}
export default Hero;