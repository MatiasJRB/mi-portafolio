import Vue from 'vue'
import axios from 'axios'

import { boot } from 'quasar/wrappers'

const axiosInstance = axios.create({
    baseURL: process.env.MATIAS.API
  })


console.log(' LA INSTANCIA DE AXIOS')
console.log(axiosInstance)

Vue.prototype.$axios = axiosInstance

export { axiosInstance }
