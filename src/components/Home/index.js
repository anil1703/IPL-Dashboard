// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCards: [], isLoading: true}
  componentDidMount() {
    this.gettingTeamCards()
  }
  gettingTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({
      teamCards: updatedData,
      isLoading: false,
    })
  }
  render() {
    const {teamCards, isLoading} = this.state
    return (
      <div className="home">
        <div className="titleDiv">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="home-head">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ulStyle">
            {teamCards.map(eachcard => (
              <TeamCard key={eachcard.name} data={eachcard} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
