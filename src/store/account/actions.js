import { axiosInstance } from 'boot/axios'

export function sendEmail({commit}, form) {
    return new Promise((resolve, reject) => {
        const url ='contact'
        axiosInstance.post(url, form)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(response)
            })
    })
}
