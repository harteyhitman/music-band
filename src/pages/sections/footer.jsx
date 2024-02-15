import { socialMedia } from "../../data/data"
const Footer = () => {
    return (
        <div id="contact" className="footer-background">
            <div className='footer_cont'>
            <div className="find_us">
                <h4>Find us here</h4>
                <div className="social-media">
                    {socialMedia.map((media) => (
                        <img src={media.img} alt="" />
                    ))}
                </div>
            </div>
            <div className="contact_us">
                <h4>Contact with us</h4>
                <p>Nullam viverra consectetuer quisque <br /> cursus et, porttitor risus.</p>
                <p>+61 (0) 3 8376 <br /> 6284noreply@envato.com</p>
            </div>
            <div className="localization">
                <h4>Localization</h4>
                <p>Envato <br />Level 13, 2 Elizabeth <br /> Victoria 3000 <br /> Australia</p>
            </div>
        </div>
        </div>
        
    )
}

export default Footer