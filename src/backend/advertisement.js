const { API } = require('.')

export default new class Advertisement {
   all() {
      return API.get('/advertisement')
   }
}
