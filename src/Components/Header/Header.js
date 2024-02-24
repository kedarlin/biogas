import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlassPlus, faGear, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Header() {

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  }
  const handleAbout = () => {
    navigate('/about');
  }
  const handleData = () => {
    navigate('/data');
  }
  const handleWastes = () => {
    navigate('/wastes');
  }
  return (
    <header>
      <div className='navbar-rightcontent'>
        {/* <div className="navbar-logosec">
          <div className="navbar-logo" onClick={handleHomeNav}>OSINTika</div>
        </div> */}
        <div className="navbar-items-container">
          <div className='navbar-item' onClick={handleHome}>
            <div className="navbar-item-text">
              Home
            </div>
          </div>
          <div className='navbar-item' onClick={handleAbout}>
            <div className="navbar-item-text">
              About
            </div>
          </div>
          <div className='navbar-item' onClick={handleData}>
            <div className="navbar-item-text">
              Data
            </div>
          </div>
          <div className='navbar-item' onClick={handleWastes}>
            <div className="navbar-item-text">
              Wastes
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-profile">
        <div className="dp">
          <FontAwesomeIcon icon={faUser} className="dpicn" alt="user-profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
