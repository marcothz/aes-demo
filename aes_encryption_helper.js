"use strict";
var crypto = require("crypto");

var AesEncryptionHelper = (function () {

    var cipher_alg = "aes256"

    function encrypt(plainText, key, iv, encoding) {

        var keyBuf = Buffer.from(key, 'base64'); 
        var ivBuf = Buffer.from(iv, 'base64'); 

        var cipher = crypto.createCipheriv(cipher_alg, keyBuf, ivBuf);

        encoding = encoding || "binary";

        var result = cipher.update(plainText, "utf8", encoding);
       
        result += cipher.final(encoding);

        return result;
    }

    function decrypt(cipherText, key, iv, encoding) {

        var keyBuf = Buffer.from(key, 'base64'); 
        var ivBuf = Buffer.from(iv, 'base64'); 

        var decipher = crypto.createDecipheriv(cipher_alg, keyBuf, ivBuf);

        encoding = encoding || "binary";

        var result = decipher.update(cipherText, encoding);

        result += decipher.final();

        return result;
    }

    return {
        encrypt: encrypt,
        decrypt: decrypt
    };
})();

module.exports = AesEncryptionHelper;