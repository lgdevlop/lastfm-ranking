export default class apiService {
  /**
   * Obtem os dados do Endpoint da API fornecido
   * @param {string} url Endereço URL do endpoint
   */
  static getApi(url) {
    return fetch(url).then((resposta) => resposta.json())
  }

  /**
   * Obtem os top 10 artistas para o Brasil de acordo com o Last.FM
   */
  static getTopArtists() {
    // http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=brazil&api_key=YOUR_API_KEY_HERE&limit=10&format=json
    const parameters = {
      url: 'http://ws.audioscrobbler.com/2.0/?',
      method: 'method=geo.gettopartists&',
      country: `country=brazil&`,
      apiKey: 'api_key=YOUR_API_KEY_HERE',
      limit: 'limit=10&',
      format: 'format=json',
    }

    const url = `${parameters.url +
      parameters.method +
      parameters.country +
      parameters.apiKey +
      parameters.limit +
      parameters.format}`

    return this.getApi(url)
  }
  /**
   * Obtem as top 10 músicas para o Brasil de acordo com o Last.FM
   */
  static getTopTracks() {
    // http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=brazil&api_key=YOUR_API_KEY_HERE&limit=10&format=json
    const parameters = {
      url: 'http://ws.audioscrobbler.com/2.0/?',
      method: 'method=geo.gettoptracks&',
      country: `country=brazil&`,
      apiKey: 'api_key=YOUR_API_KEY_HERE',
      limit: 'limit=10&',
      format: 'format=json',
    }

    const url = `${parameters.url +
      parameters.method +
      parameters.country +
      parameters.apiKey +
      parameters.limit +
      parameters.format}`

    return this.getApi(url)
  }
  /**
   * Busca por artistas informados para o Brasil de acordo com o Last.FM
   * @param {string} term Pedaço do nome ou o nome do artista
   */
  static getMatchingArtists(term) {
    const parameters = {
      url: 'http://ws.audioscrobbler.com/2.0/?',
      method: 'method=artist.search&',
      artist: `artist=${term}&`,
      apiKey: 'api_key=YOUR_API_KEY_HERE',
      limit: 'limit=8&',
      format: 'format=json',
    }

    const url = `${parameters.url +
      parameters.method +
      parameters.artist +
      parameters.apiKey +
      parameters.limit +
      parameters.format}`

    return this.getApi(url)
  }
  /**
   * Obtem informações do artista de acordo com o Last.FM
   * @param {string} artist Nome do artista
   */
  static getArtistInfo(artist) {
    const parameters = {
      url: 'http://ws.audioscrobbler.com/2.0/?',
      method: 'method=artist.getinfo&',
      artist: `artist=${artist}&`,
      apiKey: 'api_key=YOUR_API_KEY_HERE',
      format: 'format=json',
    }
    const url = `${parameters.url +
      parameters.method +
      parameters.artist +
      parameters.apiKey +
      parameters.format}`

    return this.getApi(url)
  }
  /**
   * Obtem as 12 top músicas do artista
   * @param {string} artist Nome do artista
   */
  static getArtistTopTracks(artist) {
    const parameters = {
      url: 'http://ws.audioscrobbler.com/2.0/?',
      method: 'method=artist.gettoptracks&',
      artist: `artist=${artist}&`,
      apiKey: 'api_key=YOUR_API_KEY_HERE',
      limit: 'limit=12&',
      format: 'format=json',
    }
    const url = `${parameters.url +
      parameters.method +
      parameters.artist +
      parameters.apiKey +
      parameters.limit +
      parameters.format}`

    return this.getApi(url)
  }
}
