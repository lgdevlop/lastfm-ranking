const INITIAL_STATE = {
  topTenArtists: [],
  artistsSmall: [],
  artistsBig: [],
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOP_TEN_ARTISTS':
      return {
        ...state,
        topTenArtists: action.payload,
      }
    case 'ARTISTS_SMALL':
      return {
        ...state,
        artistsSmall: action.payload,
      }
    case 'ARTISTS_BIG':
      return {
        ...state,
        artistsBig: action.payload,
      }
    default:
      return state
  }
}
