import { combineReducers } from 'redux'

import HeaderReducer from './HeaderReducer'
import MostListenedArtistReducer from './MostListenedArtistReducer'
import ArtistInfosReducer from './ArtistInfosReducer'
import MostListenedMusicReducer from './MostListenedMusicReducer'

const reducers = combineReducers({
  searchedTerm: HeaderReducer,
  topArtists: MostListenedArtistReducer,
  artistInfos: ArtistInfosReducer,
  geoTopTracks: MostListenedMusicReducer,
})

export default reducers
