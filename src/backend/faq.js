const { API } = require('.')

export default new class FAQ {
    all() {
        return API.get('/faq')
    }
}
