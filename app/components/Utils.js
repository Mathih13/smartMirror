var Utils = function () {}


Utils.prototype.getCurrentLocation = () => {
  return new Promise((resolve, reject) => {

    const publicIp = require('public-ip');
    let ipinfo;

    publicIp.v4().then(ip => {
        ipinfo = 'https://ipinfo.io/' + ip + '/json'
        fetch(ipinfo)
          .then((res) => {
            return res.json()
          })
          .then((json) => {
            var loc = json.loc.split(',')
            var lat = loc[0]
            var lon = loc[1]

            resolve({lat: lat, lon: lon})
          })
    })
  })
  reject(new Error('Something went wrong!'))
}

Utils.prototype.getCurrentCity = () => {
  return new Promise((resolve, reject) => {
    fetch('https://ipinfo.io/158.37.240.19/json')
      .then((res) => {
        return res.json()
      })
      .then((json) => {

        resolve({city: json.city})
      })
  })
  reject(new Error('Something went wrong!'))
}


module.exports = new Utils()
