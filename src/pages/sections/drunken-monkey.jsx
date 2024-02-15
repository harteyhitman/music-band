import Navbar from "../../components/navbar"
import DiscFull from '../../assets/icons/disc-full.png'

const DrunkenMonkey = () => {
  return (
    <div className='drunken'>
      <Navbar />
      <div className="drunken_text">
        <h1>  <h1>    Drunken Monkey <br /> Our new album in 2018</h1></h1>
      </div>
      <div className="rolling_disc">
        <img src={DiscFull} alt="" />
      </div>
    </div>
  )
}

export default DrunkenMonkey