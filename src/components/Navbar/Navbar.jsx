import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/main-logo.png'
import {NavLinks} from '../../constants/index'
import { ArrowRepeat , Cart , Person , SuitHeart } from 'react-bootstrap-icons';
import CartItems from '../CartItems';
import SearchBtn from '../SearchBtn';
import WishList from '../WishList';
import Account from '../Account';
import togglarIcon from '../../assets/images/icons/togglar-icon.png'
import closeIcon from '../../assets/images/icons/close-icon.png'
import { useState } from 'react';
import 'animate.css';
import { ChevronUp } from 'react-bootstrap-icons';
import Scroll from '../Scroll';


const Navbar = () => {

  const [toggle,setToggle] = useState(false)
  const toogleBarIcon = ()=>{
    setToggle(!toggle)
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
          <button onClick = {toogleBarIcon}className="border-0 bg-white fs-4 d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src={toggle?closeIcon:togglarIcon} alt="bar-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {NavLinks.map(item=>(
                <li className="nav-item" key={item.link}>
                    <Link className="nav-link active" aria-current="page" to={item.url.toLocaleLowerCase()}>{item.link}</Link>
              </li>
              ))}
            </ul>
          </div>
          <ul className='nav-controls d-none d-lg-flex align-items-center'>
                <SearchBtn/>
                <li>
                  <Link to='/compareproduct'><button className='compare-btn'>{<ArrowRepeat size={24}/>}</button></Link>
                </li>
                  <WishList/>
                  <CartItems/>
                  <Account/>
          </ul>
        </div> 
      </nav>
      <div className="bottom-header d-flex d-lg-none">
        <div className="container">
        <ul className='nav__controls-responsive'>
                <a href='/cart'><button>{<Cart size={18}/>}</button><h6>Cart</h6></a>
                <a href='/compareProduct'><button>{<ArrowRepeat size={20}/>}</button><h6>Compare</h6></a>
                <a href='/wishList'><button>{<SuitHeart size={20}/>}</button><h6>Wishast</h6></a>
                <a href='/login'><button>{<Person size={20}/>}</button><h6>Loge In</h6></a>
                
          </ul>
        </div>
      </div>
      <Scroll/>
    </header>
    
  )
}

export default Navbar