import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './MostListenedMusic.css'

import Title from '../../common/Title'
import TopMusics from '../../components/TopMusics'
import CarrouselControl from '../../common/CarrouselControl'

import ApiService from '../../services/apiService'

import * as MostListenedMusicActions from '../../actions/MostListenedMusicActions'

export class MostListenedMusic extends Component {
  componentDidMount() {
    this.getTopTracks()
    this.enableFirstButton()
  }

  getTopTracks = async () => {
    const { setGeoTopTracks, setViewGeoTopTracks } = this.props
    const data = await ApiService.getTopTracks()
    const topGeoTracks = []
    data.tracks.track.forEach((track) => {
      const topMusic = {}
      topMusic.music = track.name
      topMusic.artist = track.artist.name
      topMusic.image = track.image[3]['#text']
      topGeoTracks.push(topMusic)
    })
    setGeoTopTracks(topGeoTracks)
    setViewGeoTopTracks(
      topGeoTracks.filter((element, index, array) => array.indexOf(element) < 2)
    )
  }

  haveElements = (elements) => elements.length > 0

  getButtons = () =>
    document.querySelectorAll('.mais-escutadas .nav-control__link_selecionado')

  getFirstButton = () =>
    document.querySelector(
      '.mais-escutadas .mais-escutadas__nav-control a[name="0"] .nav-control__link'
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

  activeClickedButton = (event) =>
    event.target.classList.toggle('nav-control__link_selecionado')

  changeMusic = (event) => {
    const { setViewGeoTopTracks, geoTopTracks } = this.props
    switch (event.currentTarget.attributes.name.value) {
      case '0':
        setViewGeoTopTracks(
          geoTopTracks.filter((element, index, array) => array.indexOf(element) < 2)
        )
        break
      case '1':
        setViewGeoTopTracks(
          geoTopTracks.filter(
            (element, index, array) =>
              array.indexOf(element) > 1 && array.indexOf(element) < 4
          )
        )
        break
      case '2':
        setViewGeoTopTracks(
          geoTopTracks.filter(
            (element, index, array) =>
              array.indexOf(element) > 3 && array.indexOf(element) < 6
          )
        )
        break
      case '3':
        setViewGeoTopTracks(
          geoTopTracks.filter(
            (element, index, array) =>
              array.indexOf(element) > 5 && array.indexOf(element) < 8
          )
        )
        break
      case '4':
        setViewGeoTopTracks(
          geoTopTracks.filter((element, index, array) => array.indexOf(element) > 7)
        )
        break
      default:
        setViewGeoTopTracks([])
        break
    }
  }

  handleClick = (event) => {
    // Don't reload the page
    event.preventDefault()
    // Disable all buttons
    this.disableAllButtons()
    // Active clicked button
    this.activeClickedButton(event)
    // Change top Listened Artists
    this.changeMusic(event)
  }

  render() {
    const { viewGeoTopTracks } = this.props
    return (
      <div className="mais-escutadas pd-tp-50 pd-bt-50">
        <div className="pd-bt-50">
          <Title featuredText="Most" text="Played Musics" />
        </div>
        <TopMusics musics={viewGeoTopTracks} />
        <CarrouselControl handleClick={this.handleClick} buttonsQuantity="5" />
      </div>
    )
  }
}

MostListenedMusic.propTypes = {
  geoTopTracks: PropTypes.arrayOf(PropTypes.object),
  viewGeoTopTracks: PropTypes.arrayOf(PropTypes.object),
  setViewGeoTopTracks: PropTypes.func.isRequired,
}

MostListenedMusic.defaultProps = {
  geoTopTracks: [{}],
  viewGeoTopTracks: [{}],
}

const mapStateToProps = (state) => ({
  geoTopTracks: state.geoTopTracks.geoTopTracks,
  viewGeoTopTracks: state.geoTopTracks.viewGeoTopTracks,
})

const mapDispatchToProps = {
  ...MostListenedMusicActions,
}

// export default MostListenedMusic
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MostListenedMusic)
