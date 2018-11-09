const INITIAL_STATE = {
  searchedArtist: '',
  listMatchedArtists: [''],
  artistInfo: {},
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH_TERM_CHANGED':
      return {
        ...state,
        searchedArtist: action.payload,
      }
    case 'MATCHED_ARTISTS':
      return {
        ...state,
        listMatchedArtists: action.payload,
      }
    case 'SEARCH_TERM_EMPTY':
      return {
        ...state,
        listMatchedArtists: action.payload,
      }
    case 'ARTIST_INFO':
      return {
        ...state,
        artistInfo: action.payload,
      }
    default:
      return state
  }
}
