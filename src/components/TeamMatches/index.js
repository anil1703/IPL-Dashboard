// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {updatedData: [], isLoading: true, id: ''}
  componentDidMount() {
    this.gettingDetails()
  }
  gettingDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const {latest_match_details, recent_matches, team_banner_url} = data
    const latestMatchDetails = [latest_match_details]
    const recentMatches = recent_matches
    const teamBannerUrl = team_banner_url
    const updatingLatestMatchDetails = latestMatchDetails.map(eachdet => ({
      umpires: eachdet.umpires,
      result: eachdet.result,
      manOfTheMatch: eachdet.man_of_the_match,
      id: eachdet.id,
      date: eachdet.date,
      venue: eachdet.venue,
      competingTeam: eachdet.competing_team,
      competingTeamLogo: eachdet.competing_team_logo,
      firstInnings: eachdet.first_innings,
      secondInnings: eachdet.second_innings,
      matchStatus: eachdet.match_status,
    }))
    const updatingRecentMatches = recentMatches.map(eachre => ({
      umpires: eachre.umpires,
      result: eachre.result,
      manOfTheMatch: eachre.man_of_the_match,
      id: eachre.id,
      date: eachre.date,
      venue: eachre.venue,
      competingTeam: eachre.competing_team,
      competingTeamLogo: eachre.competing_team_logo,
      firstInnings: eachre.first_innings,
      secondInnings: eachre.second_innings,
      matchStatus: eachre.match_status,
    }))
    this.setState({
      id: {id},
      updatedData: [
        updatingLatestMatchDetails,
        updatingRecentMatches,
        teamBannerUrl,
      ],
      isLoading: false,
    })
  }
  getRecentMatches = () => {
    const {updatedData} = this.state
    const recentList = updatedData[1]
    return (
      <ul className="ulTwo">
        {recentList.map(eachRecent => (
          <MatchCard key={eachRecent.competingTeam} data={eachRecent} />
        ))}
      </ul>
    )
  }
  gettingLatesMatch = () => {
    const {updatedData} = this.state
    const latestMatch = updatedData[0]
    console.log(latestMatch)
    return (
      <div className="latest">
        <h1>Latest Match</h1>
        <ul className="ulDiv">
          {latestMatch.map(eachla => (
            <LatestMatch key={eachla.competingTeam} data={eachla} />
          ))}
        </ul>
        {this.getRecentMatches()}
      </div>
    )
  }
  getAllDataImages = () => {
    const {updatedData} = this.state
    return (
      <div>
        <img src={updatedData[2]} alt="team banner" className="banner" />
        {this.gettingLatesMatch()}
      </div>
    )
  }
  render() {
    const {id, isLoading, updatedData} = this.state
    console.log(isLoading)
    return (
      <div className={`TeamMatchesDiv ${id.id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>{this.getAllDataImages()}</div>
        )}
      </div>
    )
  }
}

export default TeamMatches
