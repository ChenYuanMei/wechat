const crypto = require('crypto')

module.exports = {
    // md5加密
  md5: (encryptString) => {
    if (encryptString.length <= 0) return ''
    let md5 = crypto.createHash('md5')
    let encrypt = md5.update(encryptString).digest('hex')
    return encrypt.toUpperCase()
  }
}
