import './index.css'

const LatestMatch = props => {
  const {data} = props

  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = data
  console.log(data)
  return (
    <>
      <li className="one">
        <p className="la-head">{competingTeam}</p>
        <p className="la-para">{date}</p>
        <p className="la-para">{venue}</p>
        <p className="la-para">{result}</p>
      </li>
      <li className="two">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latestLogo"
        />
      </li>
      <li className="three">
        <p className="la-para">First Innings</p>
        <p className="la-para">{firstInnings}</p>
        <p className="la-para">Second Innings</p>
        <p className="la-para">{secondInnings}</p>
        <p className="la-para">Man Of The Match</p>
        <p className="la-para">{manOfTheMatch}</p>
        <p className="la-para">Umpires</p>
        <p className="la-para">{umpires}</p>
      </li>
    </>
  )
}

export default LatestMatch
