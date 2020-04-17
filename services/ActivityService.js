import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://www.boredapi.com/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getActivity () {
    return apiClient.get('/activity')
  }
}
