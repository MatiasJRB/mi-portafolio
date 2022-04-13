import Vue from 'vue'
import axios from 'axios'

import { boot } from 'quasar/wrappers'

const axiosInstance = axios.create({
  baseURL: process.env.MATIAS.API
})

Vue.prototype.$axios = axiosInstance

export { axiosInstance }
