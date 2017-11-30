/*
The Api wrapper is a utility module for making api calls to the server.
Using this will both shorten the size of "fetches" in the code
and also make server calls easier.
TODO: Add more methods for fetching and posting often-used things
Ex: Api.getAllUsers()
*/
var Api = function () {}

var baseURL = ''

// General "getter" for api calls
Api.prototype.get = (url, headers) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: headers
    })
    .then((response) => response.json())
    .then((json) => {
      resolve(json)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

// General "post" method for api calls
Api.prototype.post = (url, headers, body) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })
    .then((response) => response.json())
    .then((json) => {
      resolve(json)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

module.exports = new Api()
