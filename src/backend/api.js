import axios from 'axios'

export default new class API {
  constructor(apiUrl) {
    this.client = axios.create({
      baseURL: apiUrl,
      // timeout: 1000,
      // headers: {'X-Custom-Header': 'foobar'}
    })
  }

  setJWTToken(jwt) {
    if (jwt.access_token) {
      this.client.defaults.headers.common['Authorization'] = `Bearer ${jwt.access_token}`
    } else {
      delete this.client.defaults.headers.common['Authorization']
    }
  }

  get(url) {
    return this.client.get(url)
      .then(response => response.data)
  }

  post(url, data) {
    return this.client.post(url, data)
      .then(response => response.data)
  }
  patch(url, data) {
    return this.client.patch(url, data)
      .then(response => response.data)
  }
}('http://localhost/api/')
