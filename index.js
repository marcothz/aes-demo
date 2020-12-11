const { Console } = require("console");
var aesEncryptionHelper = require("./aes_encryption_helper")

// 32-bit key (base 64 encoded)
var key = "DY7durYvbzBsp6pUReI/SJK+HMyf6ZcgelaBjDa3Ww8="
// 16-bit initialization vector (base 64 encoded) 
var iv = "kS9/qz1lvIINJyQIsMWtUw=="

// Plain text to be encrypted, formatted as: <Unix Timestamp>\t<MSISDN>
var samplePlainText = "1607698641\t5511987651234"

if(samplePlainText !== null)
{
  console.log(`Encrypting plain text: \"${samplePlainText}\"`)

  var result = aesEncryptionHelper.encrypt(samplePlainText, key, iv, "base64")

  console.log(`  >> Cipher text: \"${result}\"`)
}

// Encrypted plain text to be decrypted (base 64 encoded)
var sampleCipherText = "5YLuMt8auSVXz3tIjLnsBPBk+iANikf2h9JrJzArYi4="

if(sampleCipherText !== null)
{
  console.log(`Decrypting cipher text: \"${sampleCipherText}\"`)

  var result = aesEncryptionHelper.decrypt(sampleCipherText, key, iv, "base64")

  console.log(`  >> Plain text: \"${result}\"`)
}
