import { navlist } from "../data/data"
const Navlist = () => {
  return (
    <div className='navlist_cont'>
        {navlist.map((list) => (
            <div key={list.id} className="list">
                <ul>
                   <li>
                    <a href={`#${list.id}`}>{list.home}</a>
                   </li>
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Navlist