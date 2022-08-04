import { axiosInstance } from 'boot/axios'
import {filterEnabled, filterFeatured, parseArticles} from './mutations'

export function getArticles( { commit }) {
    return new Promise((resolve, reject) => {
        axiosInstance.get('articles')
            .then((response) => {
                commit('setArticles', response.data.response.data)
                resolve(response.data.response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function getArticle({ commit }, id) {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`articles/${id}`)
            .then((response) => {
                const article = response.data.response.data
                filterEnabled([article])
                filterFeatured([article])
                parseArticles([article])
                resolve(article)
            }).catch((error) => {
                reject(error)
            })
    })
}

export function getFeaturedArticles ( { commit }) {
    return new Promise((resolve, reject) => {
        axiosInstance.get('articles?featured=true')
            .then((response) => {
                commit('setFeaturedArticles', response.data.response.data)
                resolve(response.data.response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}