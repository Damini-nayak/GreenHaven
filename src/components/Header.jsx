import React, {useState} from 'react'
import Base from './Base'
import '../style/App.css'


export default function Header() {

 const [isDropdownVisible, setIsDropDownVisible] = useState(false);

 const dropdownToggle = () => {
  setIsDropDownVisible((prevState) => !prevState);
 };

  return (
    <>
      <div className='header'>
        <div className='menu'><div className='dropicon' onClick={dropdownToggle}></div>Menu</div>
        <div className={`dropdown ${isDropdownVisible ? 'visible' : 'hidden'}`}><a>Shop</a><a>Contact us</a><a>Plant care guides</a><a>DIY's</a><a>Garden design ideas</a><a>Showcase</a></div>
        <div className='logo'><img src={Base.logo} alt="" />GreenHaven</div>
        <div className='login'><button>Login</button></div>
      </div>
      <hr className='horizontal' />

    </>
  )
}
