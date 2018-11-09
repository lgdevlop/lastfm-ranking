export const setArtistInfosData = (artistData) => ({
  type: 'ARTIST_INFOS_DATA',
  payload: artistData,
})

export const setArtistInfosTopTracks = (artistTopTracks) => ({
  type: 'ARTIST_INFOS_TOP_TRACKS',
  payload: artistTopTracks,
})
