import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '33aef3937c4c453b8b40b66340ccf3fd',
  },
})
