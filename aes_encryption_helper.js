'use strict'
const crypto = require('crypto')

const AesEncryptionHelper = (function () {

    const cipher_alg = 'aes256'

    function encrypt(data, key, iv) {
        const cipher = crypto.createCipheriv(cipher_alg, key, iv)

        const updateBuf = cipher.update(data, 'utf8')
        const finalBuf = cipher.final()

        return Buffer.concat([updateBuf, finalBuf])
    }

    function decrypt(data, key, iv) {
        const decipher = crypto.createDecipheriv(cipher_alg, key, iv)

        var result = decipher.update(data)

        result += decipher.final()

        return result
    }

    return {
        encrypt: encrypt,
        decrypt: decrypt
    }
})()

module.exports = AesEncryptionHelper