import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './MostListenedArtist.css'
import Title from '../../common/Title'
import TopArtists from '../../components/TopArtists'
import CarrouselControl from '../../common/CarrouselControl'

import ApiService from '../../services/apiService'

import * as MostListenedArtistActions from '../../actions/MostListenedArtistActions'

class MostListenedArtist extends Component {
  componentDidMount() {
    // Get 10 top artists
    this.getTopTenArtists()

    // stylizes the first button as active
    this.enableFirstButton()
  }

  componentDidUpdate(prevProps) {
    const { topTenArtists } = this.props
    if (prevProps.topTenArtists !== topTenArtists) {
      // Show the top five artists
      this.setArtistsView()
    }
  }

  haveElements = (elements) => elements.length > 0

  getButtons = () => document.querySelectorAll('.top-artistas .nav-control__link_selecionado')

  getFirstButton = () =>
    document.querySelector(
      '.top-artistas .mais-escutadas__nav-control a[name="0"] .nav-control__link'
    )

  enableFirstButton = () => {
    const element = this.getFirstButton()
    if (element) element.classList.toggle('nav-control__link_selecionado')
  }

  disableAllButtons = () => {
    const elements = this.getButtons()
    if (this.haveElements(elements))
      elements.forEach((element) => {
        element.classList.toggle('nav-control__link_selecionado')
      })
  }

  activeClickedButton = (event) => event.target.classList.toggle('nav-control__link_selecionado')

  changeArtist = (event) => {
    if (event.currentTarget.attributes.name.value === '0') {
      this.setArtistsView()
    } else {
      this.setArtistsView(1)
    }
  }

  handleClick = (event) => {
    // console.log('Target: ', event.target)
    event.preventDefault()

    // Disable buttons
    this.disableAllButtons()
    // Activates the clicked button
    this.activeClickedButton(event)
    // Change top Listened Artists
    this.changeArtist(event)
  }

  getTopTenArtists = async () => {
    const { setTopTenArtists } = this.props
    const topTenArtists = []
    const data = await ApiService.getTopArtists()
    data.topartists.artist.forEach((artist) => {
      const artists = {}
      artists.name = artist.name
      artists.listeners = artist.listeners
      artists.image = artist.image[4]['#text']
      topTenArtists.push(artists)
    })
    setTopTenArtists(topTenArtists)
  }

  setArtistsView = (listArtist = 0) => {
    const { setArtistsBig, setArtistsSmall, topTenArtists } = this.props
    if (listArtist === 0) {
      setArtistsBig(topTenArtists.filter((element, index, array) => array.indexOf(element) < 2))

      setArtistsSmall(
        topTenArtists.filter(
          (element, index, array) => array.indexOf(element) > 1 && array.indexOf(element) < 5
        )
      )
    } else {
      setArtistsBig(
        topTenArtists.filter(
          (element, index, array) => array.indexOf(element) > 4 && array.indexOf(element) < 7
        )
      )

      setArtistsSmall(topTenArtists.filter((element, index, array) => array.indexOf(element) > 6))
    }
  }

  render() {
    const { artistsSmall, artistsBig } = this.props
    return (
      <div className="top-artistas pd-tp-50 pd-bt-50">
        <div className="pd-bt-50">
          <Title featuredText="Most" text="Played Artists" />
        </div>
        <TopArtists artistsSmall={artistsSmall} artistsBig={artistsBig} />
        <CarrouselControl handleClick={this.handleClick} buttonsQuantity="2" />
      </div>
    )
  }
}

MostListenedArtist.propTypes = {
  topTenArtists: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistsBig: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistsSmall: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArtistsSmall: PropTypes.func.isRequired,
  setArtistsBig: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  topTenArtists: state.topArtists.topTenArtists,
  artistsSmall: state.topArtists.artistsSmall,
  artistsBig: state.topArtists.artistsBig,
})

const mapDispatchToProps = {
  ...MostListenedArtistActions,
}

// export default MostListenedArtist
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MostListenedArtist)
