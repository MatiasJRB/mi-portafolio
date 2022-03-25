import Vue from 'vue'
import axios from 'axios'

import { boot } from 'quasar/wrappers'

const axiosInstance = axios.create({
    baseURL: process.env.MATIAS.API
    // baseURL: 'https://api.nuqtest.link/api/'
    // baseURL: 'https://stage.api.nuqlea.com/api'
    // baseURL: 'https://6146-181-93-183-177.ngrok.io/api'
    // baseURL: 'https://dev2.api.nuqlea.com/api/'
    // baseURL: 'http://localhost/api/'
  })


console.log(' LA INSTANCIA DE AXIOS')
console.log(axiosInstance)

Vue.prototype.$axios = axiosInstance

export { axiosInstance }
