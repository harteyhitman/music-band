import { electronics } from "../../data/data"
import BlueConcert from '../../assets/icons/blue_concert.png'
import GroupGuiltar from '../../assets/icons/group-guiltars.png'
import Stereo from '../../assets/icons/stereo.png'
import Button from "../../components/button"

const Theband = () => {
    return (
        <div className='the_band'>
            <div className="band">
                <h4>The band <br /> in classic uniforms</h4>
                {electronics.map((elect) => (
                    <div key={elect.img} className="electronics">
                        <div className="elect_img">
                            <img src={elect.img} alt="" />
                        </div>
                        <p>{elect.text}</p>
                    </div>
                ))}
            </div>
            <div className="live_perfomance">
                <img src={BlueConcert} alt="" />
            </div>
            <div className="learn_more">
                <img src={GroupGuiltar} alt="" />
                <div className="read_more">
                    <div className="stereo">
                        <img src={Stereo} alt="" />
                        <h4>172</h4>
                    </div>
                    <p>Vivamus in diam turpis. In condimentum <br />
                        maximus tristique. Maecenas non laoreet <br />
                        odio.</p>
                    <Button className="learn_more-btn" label='Learn more' />
                </div>
            </div>
        </div>
    )
}

export default Theband