import {Link} from 'react-router-dom';
import './Header.css'
const Header = ()=>{
    return(
        <nav className='headerContainer'>
            <img alt="logo"src="https://res.cloudinary.com/ducxt7zb3/image/upload/v1645532143/tuentiTransparente_tozqdb.png"></img>
            {/* <Link to="/">Home</Link> */}
        </nav>
    )
}

export default Header;