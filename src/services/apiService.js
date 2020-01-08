import axios from 'axios'
import store from '../store'

const apiPublic = axios.create({
    baseURL: 'https://api.paulobezerra.eti.br/api',
    timeout: 10000
})

const apiProtected = axios.create({
    baseURL: 'https://api.paulobezerra.eti.br/api',
    timeout: 10000,
    headers: {
        'x-access-token': store.state.token
    }
})

export {apiPublic, apiProtected}
