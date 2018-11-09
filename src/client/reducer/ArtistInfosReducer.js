const INITIAL_STATE = {
  artistData: {},
  artistTopTracks: [],
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ARTIST_INFOS_DATA':
      return { ...state, artistData: action.payload }
    case 'ARTIST_INFOS_TOP_TRACKS':
      return { ...state, artistTopTracks: action.payload }
    default:
      return state
  }
}
