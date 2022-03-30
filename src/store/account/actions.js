import { axiosInstance } from 'boot/axios'

export function sendEmail({commit}, form) {
    return new Promise((resolve, reject) => {
        const url ='contact'
        let data = { ... form}
        if (!data.from) {
            reject({
                response: {
                    data: {
                        message: 'Your email address is required'
                    }
                }
            })
        } else if (!validateEmail(data.from)){
            reject({
                response: {
                    data: {
                        message: 'Please, enter a valid email address'
                    }
                }
            })
        }
        if (!data.html) {
            reject({
                response: {
                    data: {
                        message: 'Your message is required'
                    }
                }
            })
        }
        data.subject = data.name +', '+data.from + ' with subject: ' + data.subject
        fetch(process.env.MATIAS.API + 'contact', {
            method: 'POST', 
            mode: 'no-cors',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        .then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
