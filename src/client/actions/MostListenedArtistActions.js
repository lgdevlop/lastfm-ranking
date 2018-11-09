export const setTopTenArtists = (artists) => ({
  type: "TOP_TEN_ARTISTS",
  payload: artists
})

export const setArtistsSmall = (artistsSmall) => ({
  type: "ARTISTS_SMALL",
  payload: artistsSmall
})

export const setArtistsBig = (artistsBig) => ({
  type: "ARTISTS_BIG",
  payload: artistsBig
})
