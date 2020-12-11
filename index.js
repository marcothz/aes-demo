const { Console } = require("console");
var aesEncryptionHelper = require("./aes_encryption_helper")

// 32-bit key (base 64 encoded)
var key = "DY7durYvbzBsp6pUReI/SJK+HMyf6ZcgelaBjDa3Ww8="
// 16-bit initialization vector (base 64 encoded) 
var iv = "kS9/qz1lvIINJyQIsMWtUw=="

// Plain text to be encrypted, formatted as: <Unix Timestamp>\t<MSISDN>
var plainText = "1607698641\t5511987651234"

if(plainText !== null)
{
  console.log(`Encrypting plain text: \"${plainText}\"`)

  var result = aesEncryptionHelper.encrypt(plainText, key, iv, "base64")

  console.log(`  >> Cipher text: \"${result}\"`)
}

// Base 64 encrypted plain text to be decrypted
var cipherText = "5YLuMt8auSVXz3tIjLnsBPBk+iANikf2h9JrJzArYi4="

if(cipherText !== null)
{
  console.log(`Decrypting cipher text: \"${cipherText}\"`)

  var result = aesEncryptionHelper.decrypt(cipherText, key, iv, "base64")

  console.log(`  >> Plain text: \"${result}\"`)
}
