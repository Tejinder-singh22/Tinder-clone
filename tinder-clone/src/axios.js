import axios from 'axios'

const instance = axios.create({
    baseUrl: 'https://tinder-backend077.herokuapp.com/'
})

export default instance