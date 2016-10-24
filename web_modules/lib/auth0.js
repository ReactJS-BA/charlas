import Auth0Lock from 'auth0-lock'
import { auth0 } from 'config'
import decode from 'jwt-decode';
const lock = new Auth0Lock( auth0.client, auth0.domain, { autoclose: true, auth: { redirect: false } } );

const offsetSeconds = 5

class Token {
  constructor(token) {
    this.token = token
  }
  isLoggedIn() {
    return !this.isTokenExpired()
  }
  isTokenExpired() {
    const date = this.getTokenExpirationDate()
    return date === null || !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
  }
  getTokenExpirationDate(){
    if (!this.token) return null;
    const decoded = decode(this.token)
    if(!decoded.exp) return null
    const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp)
    return date
  }
  clear() {
    return new Token()
  }
}

export function localProfile() {
  return localStorage.profile ? JSON.parse(localStorage.profile) : null;
}

export function localToken() {
  return new Token(localStorage.id_token)
}

export function login() {
    lock.show()
    return new Promise( (ok,fail)=> {
        lock.on('authenticated', function (result){
            lock.getProfile(result.idToken, (error, profile) => {
                if (error) {
                    logout()
                    fail(error)
                } else {
                    saveLocal(result.idToken, profile)
                    ok({token: new Token(result.idToken), profile})
                }
            })
        })
    })
}

export function logout(){
    removeLocal();
}

function saveLocal(idToken, profile){
    localStorage.setItem('id_token', idToken)
    localStorage.setItem('profile', JSON.stringify(profile))
}

function removeLocal(){
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
}
