var Utils = function () {}


Utils.prototype.getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    fetch('https://ipinfo.io/85.167.74.187/json')
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
  reject(new Error('Something went wrong!'))
}


module.exports = new Utils()
