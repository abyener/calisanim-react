const { API } = require('.')

export default new class Worker {
    all() {
        return API.get('/worker')
    }
    
    get(id) {
        return API.get('/worker/' + id) 
    }
}
