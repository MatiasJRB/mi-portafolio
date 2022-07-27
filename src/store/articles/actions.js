import { axiosInstance } from 'boot/axios'

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