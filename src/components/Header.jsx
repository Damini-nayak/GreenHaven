import React, { useState, useEffect } from 'react'
import Base from './Base'


export default function Header() {

  useEffect(() => {
    const menu = document.getElementsByClassName('menu');
    const dropdown = document.getElementsByClassName('dropdown');
    menu.addEventListener('click', () => {
      if (display === 'hidden') {
        dropdown.style.display = "visible";
      } else {
        dropdown.style.display = "hidden";
      }
    })
  })

  return (
    <>
      <div className='header'>
        <div className='menu'><div className='dropicon'></div>Menu</div>
        <div className='dropdown'><a>Shop</a><a>Contact us</a><a>Plant care guides</a><a>DIY's</a><a>Garden design ideas</a><a>Showcase</a></div>
        <div className='logo'><img src={Base.logo} alt="" />GreenHaven</div>
        <div className='login'><button>Login</button></div>
      </div>
      <hr className='horizontal' />

    </>
  )
}
