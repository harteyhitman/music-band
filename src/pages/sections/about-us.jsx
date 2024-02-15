import React from 'react'
import Button from '../../components/button'
import Guiltar from '../../assets/images/musicband-instruments.png'

const Aboutus = () => {
    return (
        <div className='about_us_cont'>
            <div className="about_us">
                <p className='promote'>Promotion video</p>
                <h4>We can feel and <br /> play any song</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br />
                    elit, sed do eiusmod tempor incididunt ut labore et <br />
                    dolore magna aliqua. Ut enim ad minim veniam, quis <br />
                    nostrud exercitat pa qui officia.</p>
                <Button label="About us" className='btn_about_us' />
            </div>
            <div className="guiltar">
                <img src={Guiltar} alt="" />
            </div>
        </div>
    )
}

export default Aboutus