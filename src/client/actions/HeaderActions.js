export const searchChanged = (term) => ({
  type: 'SEARCH_TERM_CHANGED',
  payload: term,
})

export const matchedArtists = (artists) => ({
  type: 'MATCHED_ARTISTS',
  payload: artists,
})

export const searchChangedEmpty = () => ({
  type: 'SEARCH_TERM_EMPTY',
  payload: [],
})

export const getArtistInfo = (artistInfo) => ({
  type: 'ARTIST_INFO',
  payload: artistInfo,
})
