const { API } = require('.')

export default new class Auth {
  constructor() {
    this.jwt = null
    this.takeToken()
  }

  setToken(data) {
    this.jwt = data
    localStorage.setItem('CALISANIM_JWT', JSON.stringify(this.jwt))
    this.sendAPI()
  }

  takeToken() {
    let data = localStorage.getItem('CALISANIM_JWT')
    data = JSON.parse(data)
    if (data) {
      this.setToken(data)
    }
  }

  sendAPI() {
    API.setJWTToken(this.jwt)
  }

  login(email, password) {
    return API.post('/auth/login', {
      email: email,
      password: password
    }).then(data => {
      this.setToken(data)
      return data
    })
  }

  register(email, password, name, surname, preferences) {
    return API.post('/auth/register', {
      email: email,
      password: password,
      name: name,
      surname: surname,
      preferences: preferences,
    }).then(data => {
      this.setToken(data)
      return data
    })
  }

  profile() {
    return API.get('/auth/profile')
  }
}()
