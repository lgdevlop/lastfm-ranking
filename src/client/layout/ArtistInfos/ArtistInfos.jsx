import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './ArtistInfos.css'
import ArtistBio from '../../components/ArtistBio'
import ArtistTopMusics from '../../components/ArtistTopMusics'
import ApiService from '../../services/apiService'

import * as ArtistInfosActions from '../../actions/ArtistInfosActions'

class ArtistInfos extends Component {
  componentDidMount() {
    this.getArtistInfo()
    this.getArtistTopTracks()
  }

  componentDidUpdate(prevProps) {
    const { artist: propsArtist } = this.props
    const { artist: prevArtist } = prevProps

    if (propsArtist !== prevArtist && propsArtist !== '') {
      this.getArtistInfo()
      this.getArtistTopTracks()
    }
  }

  getArtistInfo = async () => {
    const { artist, setArtistInfosData } = this.props
    const data = await ApiService.getArtistInfo(artist)
    const artistData = {}
    artistData.name = data.artist.name
    artistData.summary = data.artist.bio.summary.substr(0, data.artist.bio.summary.indexOf(' <a'))
    artistData.image = data.artist.image[3]['#text']
    setArtistInfosData(artistData)
  }

  getArtistTopTracks = async () => {
    const { artist, setArtistInfosTopTracks } = this.props
    const data = await ApiService.getArtistTopTracks(artist)
    const artistTopTracks = []
    data.toptracks.track.forEach((track) => {
      artistTopTracks.push(track.name)
    })
    setArtistInfosTopTracks(artistTopTracks)
  }

  render() {
    const { artistData, artistTopTracks } = this.props
    return (
      <div className="artist-page pd-lf-42 pd-rt-42 pd-tp-20 pd-bt-20">
        <ArtistBio artist={artistData} />
        <ArtistTopMusics artistTopTracks={artistTopTracks} />
      </div>
    )
  }
}

ArtistInfos.propTypes = {
  artist: PropTypes.string.isRequired,
  artistData: PropTypes.objectOf(PropTypes.string).isRequired,
  artistTopTracks: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = (state) => ({
  artistData: state.artistInfos.artistData,
  artistTopTracks: state.artistInfos.artistTopTracks,
})

const mapDispatchToProps = {
  ...ArtistInfosActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistInfos)
