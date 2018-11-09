const INITIAL_STATE = {
  geoTopTracks: [],
  viewGeoTopTracks: [],
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GEO_TOP_TRACKS':
      return { ...state, geoTopTracks: action.payload }
    case 'VIEW_GEO_TOP_TRACKS':
      return { ...state, viewGeoTopTracks: action.payload }
    default:
      return state
  }
}
