import Parse from 'parse'

const base = "http://user.space"

const urls = {
    dashboard : (token) => `${base}/login/?token=${token}`
}

function userspace(namespace) {
    const Parse = require('parse')
    Parse.initialize("userspace")
    Parse.serverURL = `${base}/${namespace}`
    Parse.login = (creds) => {
        Parse.credentials = creds
        urls.dashboard = (token) => `${base}/login/?token=${token}`
    }
    Parse.logout = () => {
        Parse.credentials = null
    }

    Parse.login(localStorage.id_token)
    return Parse;
}

export {
    urls, userspace
}
