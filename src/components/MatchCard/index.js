// Write your code here
import './index.css'

const MatchCard = props => {
  let sta = ''
  const {data} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = data
  if (matchStatus === 'Won') {
    sta = 'green'
  } else {
    sta = 'red'
  }
  return (
    <li className="re-listo">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="re-img"
      />
      <p className="re-head">{competingTeam}</p>
      <p>{result}</p>
      <p className={sta}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
