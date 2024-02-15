import MusicGroup from '../../assets/images/music_group.png'
import Button from '../../components/button'

const Classical = () => {
  return (
    <div id='music' className='classical_cont'>
      <div className="next_classical">
        <div className="classical_text">
          <p>Promotion video</p>
          <h4>We can be crazy <br /> even in classical uniforms</h4>
        </div>
        <img src={MusicGroup} alt="" />
        <div className="count_down">
          <div className="time">  <div className='number'>00</div> <br /> <div className='minutes'>days</div></div>
          <div className="time">  <div className='number'>00</div> <br /> <div className='minutes'>Hours</div></div>
          <div className='buy_ticket'>
            <p>Vivamus in diam turpis. In <br /> condimentum maximus tristique</p>
            <Button className='time-btn' label="Buy tickets now" />
          </div>

        </div>
      </div>
    </div>
  )
}
export default Classical