const bs58 = require('bs58')
const aes = require('./aes_encryption_helper')

// 32-bit key (base 64 encoded)
var key = 'DY7durYvbzBsp6pUReI/SJK+HMyf6ZcgelaBjDa3Ww8='
// 16-bit initialization vector (base 64 encoded) 
var iv = 'kS9/qz1lvIINJyQIsMWtUw=='

// Plain text to be encrypted, formatted as: <Unix Timestamp>\t<MSISDN>
var samplePlainText = '1607713294\t5511981115362'

if(samplePlainText !== null)
{
  console.log(`Encrypting plain text: \'${samplePlainText}\'`)

  // Encrypt the provided plain text
  const buffer = aes.encrypt(samplePlainText, key, iv, 'base64')
  
  // Encode encrypted data as base58 to make it human and URL friendly
  const cipherText = bs58.encode(buffer)

  console.log(`  >> Cipher text: \'${cipherText}\'`)
}

// Encrypted plain text to be decrypted (base 64 encoded)
var sampleCipherText = 'AxtWjt9dSJPPmLqP6MHQYKT346i7k5a1Ck1Vpqjm8MXc'

if(sampleCipherText !== null)
{
  console.log(`Decrypting cipher text: \'${sampleCipherText}\'`)

  // Decode the cipher text from base58
  const data = bs58.decode(sampleCipherText)

  const plainText = aes.decrypt(data, key, iv)

  console.log(`  >> Plain text: \'${plainText}\'`)
}
