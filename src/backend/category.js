const { API } = require('.')

export default new class Category {
    all() {
        return API.get('/category')
    }
}
