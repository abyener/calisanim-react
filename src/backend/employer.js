const { API } = require('.')

export default new class Employer {
    all() {
        return API.get('/employer')
    }
}
