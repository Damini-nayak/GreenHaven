import react from 'react'
import Base from './Base'

export default function Footer() {
    return (
        <div className='footer'>
            <div><h4>Get in touch</h4><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptatum iste, quos aut quaerat, officia quo deleniti laudantium itaque cum nobis sit consectetur eaque accusamus laborum natus in est vitae?</p><div><img src={Base.instagram} alt="" /><img src={Base.pinterest} alt="" /><img src="" alt="" /></div></div>
            <div><h6>Please call and send email</h6><p></p><p><a href="mainto:contact@greenhaven.com">contact@greenhaven.com</a></p><p><a href="tel:+911234567892">+91 1234567892</a></p></div>
        </div>
    );
}