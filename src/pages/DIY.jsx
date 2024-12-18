import React from 'react'
import Base from '../components/Base'

export default function DIY() {
  return (
    <>
    <div className='diymain'>
      <div>
        <h1>Why DIY In Your Garden?</h1>
        <p><span>Affordable</span>   <span>Creative</span>   <span>Sustainable</span>   <span>Rewarding</span></p>
      </div>
    </div>
    <div className='designhoriz'><hr className='horizontal' /><p>lorem ipsum dolor sit</p><hr className='horizontal' /></div>
    <div className='diymain2'>
        <div className='diy1 diys'>
        <div className='box box1'><p>lorem ipsum dolor sit</p></div>
        <div className='designideasleftH'><div><p>lorem ipsum dolor</p><p>sit amet consectetur</p></div></div>
        </div>
        <div className='diy2 diys'>
        <div className='box box2'><p>lorem ipsum dolor sit</p></div>
        </div>
        <div className='diy3 diys'>
        <div className='designideasleftH'><div><p>lorem ipsum dolor</p><p>sit amet consectetur</p></div></div>
          <div className='box box3'><p>lorem ipsum dolor sit</p></div>
        </div>
      </div>
      <div className='designhoriz'><hr className='horizontal' /><p>lorem ipsum dolor sit</p><hr className='horizontal' /></div>
      <div className='diymain3'>

      </div>
      <div className='designhoriz'><hr className='horizontal' /><p>&copy;2024</p><hr className='horizontal' /></div>
    </>
  )
}
