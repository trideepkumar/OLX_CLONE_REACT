import React, {useContext} from 'react';

import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
function Header() {
  const history = useHistory()
  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" placeholder='India'/>
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
       
        <div className="loginPage">
  {user ? (
    <span>Hello {user.displayName}</span>
  ) : (
    <Link to="/login">
      <span>Login</span>
    </Link>
  )}
  <hr />
</div>
<FontAwesomeIcon icon={faComment} />
<FontAwesomeIcon icon={faBell}  size="1.8x"/>
        {user && <span onClick={()=>{
          firebase.auth().signOut()
          history.push('/login')
        }}>Logout</span> }
      
<div className="sellMenu" >
  <SellButton></SellButton>
  <Link to="/create">
    <div className="sellMenuContent">
      <SellButtonPlus></SellButtonPlus>
      <span>SELL</span>
    </div>
  </Link>
</div>
      </div>
    </div>
  );
}

export default Header;
