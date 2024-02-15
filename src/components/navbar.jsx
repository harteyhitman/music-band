import MusicLogo from '../assets/images/music_logo.png'
import Navlist from './nav-list'
import Button from '../components/button'
import Hamburgermenu from './hamburger-menu'
const Navbar = () => {
  return (
    <div className='nav_cont'>
      <div className="nav_right">
        <img src={MusicLogo} alt="" />
        <h2>BeMusic <br />Band</h2>
      </div>
      <div className="nav_left">
        <Navlist />
        <Button className="btn" label='Buy now' />
      </div>
      <div className="hamburger_menu">
        <Hamburgermenu />
      </div>
    </div>
  )
}

export default Navbar