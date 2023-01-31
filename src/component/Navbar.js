import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSharp } from "@fortawesome/free-regular-svg-icons";
import { faL, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';


const Navbar = ({ authenticate , setAuthenticate}) => {
    const menuList = ["여성" , "Divided", "남성" , "신생아/유아" , "아동" , "H&M Home" , "Sale" , "지속가능성"]
    const navigate = useNavigate();
    let [width, setWidth] = useState(0);

    const  goToLogin  = () =>{
      navigate('/login')
    }

    const  goToHome = () =>{
      navigate('/')
    }


    const search = (event) => {
      if(event.key === "Enter"){
        let keyword = event.target.value
        navigate(`/?q=${keyword}`)
      }
    }

  return (
    <div>
      <div className='header-button'>
      <div className="side-menu none" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list none" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="burger-menu hide" onClick={() => setWidth(250)} >
          <FontAwesomeIcon icon={faBars} />
      </div>
      {
        authenticate ? (  <div className='login-button' onClick={() => setAuthenticate(false)}>
        <FontAwesomeIcon icon={faUser} />
      <div >로그아웃</div>
    </div>) : (         <div className='login-button' onClick={ goToLogin }>
            <FontAwesomeIcon icon={faUser} />
          <div >로그인</div>
        </div>)
      }
      </div>
      <div className='nav-section'  onClick={  goToHome }>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png'/>
      </div>
      <div className='menu-section'>
        <>
            <ul className='menu-list'>
                {
                    menuList.map(menu => <li>{menu}</li>)
                }
            </ul>
        </>
        <div className='search-box'> 
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder='제품검색' onKeyPress={(event) => { search(event) }}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
