import React from 'react'
import Base from './Base'

export default function Header() {
  return (
    <>
    <div className='header'>
      <div className='menu'><div className='dropicon'></div>Menu</div>
      <div className='logo'><img src={Base.logo} alt="" />GreenHaven</div>
      <div className='login'><button>Login</button></div>
    </div>
    <div className='hr'><hr className='horizontal'/></div>
    </>
  )
}
