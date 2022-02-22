import {BsFillPersonFill} from 'react-icons/bs'
import {MdPlace} from 'react-icons/md'
import {ImMobile} from 'react-icons/im'
import './login.css'
const Loggin = ()=>{
    return (
        <div className="logginContainer">
            <div className='accesData'>
                <form>
                    <div className='formLeft'>
                        <label>Email</label>
                        <input className='inputName' type="text"/>
                        <label className='white'><input type="checkbox"/>Remember me</label>
                    </div>
                    <div className='formRight'>
                        <label >Password</label>
                        <input className='inputName' type="text"/>
                        <a className='white'>Forget Password?</a>
                    </div>
                </form>
            </div>
            <div className='welcomeContainer'>
                <div className='logoWelcome'>
                    <div className='imageLogo'></div>
                    <div className='imageText'>
                        <h2>What is Tuenti?</h2>
                        <p>Tuenti is a private social platform, which is only accessed by invitation. Every day millions of people use it to communicate with each other and share information.</p>
                    </div>
                </div>
                <div className='iconsInfo'>
                    <div className='icon'>
                            <span><BsFillPersonFill/></span>
                            <span><MdPlace/></span>
                            <span><ImMobile/></span>
                    </div>
                    <div className='description'>
                        <span>
                            <h3>Social</h3>
                            <p>Conect,share and communicate with friends,partners and family
                            </p>
                        </span>
                        <span>
                            <h3>Local</h3>
                            <p>Discover local services and engage with the brands you really care about</p>
                        </span>
                        <span>
                            <h3>Smartphone</h3>
                            <p>Get Tuenti in your Smartphone</p>
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Loggin;