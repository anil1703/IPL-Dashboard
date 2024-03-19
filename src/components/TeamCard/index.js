// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {data} = props
  const {name, id, teamImageUrl} = data
  return (
    <Link className="linkStyle" to={`/team-matches/${id}`}>
      <li className="listo">
        <img src={teamImageUrl} alt={name} className="card" />
        <p className="home-para">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
