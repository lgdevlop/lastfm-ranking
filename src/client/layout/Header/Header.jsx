import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Header.css'

import AppLogo from '../../common/AppLogo'
import SearchBar from '../../common/SearchBar'
import MenuModal from '../../components/MenuModal'

import ApiService from '../../services/apiService'

import * as HeaderActions from '../../actions/HeaderActions'

export class Header extends Component {
  componentDidUpdate(prevProps) {
    const { searchedArtist: prevSearchedArtist } = prevProps
    const { searchedArtist: propsSearchedArtist, searchChangedEmpty } = this.props
    if (propsSearchedArtist !== prevSearchedArtist && propsSearchedArtist !== '') {
      this.getMatchingArtists(propsSearchedArtist)
    }
    // Limpa a lista de artistas sugeridos pela busca
    if (propsSearchedArtist === '' && prevSearchedArtist !== '') {
      searchChangedEmpty()
    }
    // Após limpar a lista de artistas sugeridos acima, fecha o modal
    if (propsSearchedArtist === '' && prevSearchedArtist === '') {
      if (this.getElement('.floating-menu').classList.contains('floating-menu_visibility')) {
        this.showHideMenuModal()
      }
    }
  }

  getMatchingArtists = async (term) => {
    const { matchedArtists } = this.props
    const matchingArtists = []
    const dados = await ApiService.getMatchingArtists(term)
    dados.results.artistmatches.artist.forEach((artist) => {
      matchingArtists.push(artist.name)
    })

    // Dispatch action
    matchedArtists(matchingArtists)
  }

  getElement = (element) => document.querySelector(element)

  showHideMenuModal = () => {
    const element = this.getElement('.floating-menu')
    if (element) element.classList.toggle('floating-menu_visibility')
  }

  handleClick = async () => {
    this.getElement('.header__search-bar').value = ''
    this.showHideMenuModal()
  }

  handleChange = (event) => {
    const { searchChanged } = this.props
    // console.log(event.target.value)
    // console.log(this.props.searchChanged)
    searchChanged(event.target.value)
    // console.log(this.getElement('.floating-menu').classList)
    if (
      !this.getElement('.floating-menu').classList.contains('floating-menu_visibility') &&
      event.target.value !== ''
    ) {
      this.showHideMenuModal()
    }
  }

  handleSubmit = (event) => {
    // console.log('handleSubmit')
    event.preventDefault()
  }

  handleKeyPress = () => {
    // console.log(event)
  }

  render() {
    const { listMatchedArtists } = this.props
    return (
      <header className="header-app pd-lf-42 pd-rt-42">
        <AppLogo />
        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <MenuModal
          handleClick={this.handleClick}
          listMatchedArtists={listMatchedArtists}
          handleKeyPress={this.handleKeyPress}
        />
      </header>
    )
  }
}

Header.propTypes = {
  searchedArtist: PropTypes.string,
  listMatchedArtists: PropTypes.arrayOf(PropTypes.string),
  searchChangedEmpty: PropTypes.func.isRequired,
  searchChanged: PropTypes.func.isRequired,
}

Header.defaultProps = {
  searchedArtist: '',
  listMatchedArtists: [''],
}

const mapStateToProps = (state) => ({
  searchedArtist: state.searchedTerm.searchedArtist,
  listMatchedArtists: state.searchedTerm.listMatchedArtists,
})

const mapDispatchToProps = {
  ...HeaderActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
