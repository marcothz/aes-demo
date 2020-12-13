const bs58 = require('bs58')
const aes = require('./aes_encryption_helper')

// -- ⚠ THIS KEY AND INITIALIZATION VECTOR ARE PUBLIC AND FOR DEMONSTRATION PURPOSES ONLY. DO NOT USE THEM IN PRODUCTION ⚠ --

// 32-bit key (base 64 encoded)
const key = 'DY7durYvbzBsp6pUReI/SJK+HMyf6ZcgelaBjDa3Ww8='
// 16-bit initialization vector (base 64 encoded) 
const iv = 'kS9/qz1lvIINJyQIsMWtUw=='

// -- CHANGE THESE VALUES TO DO YOUR OWN TESTING --

// Sample plain text to be encrypted, formatted as: <Unix Timestamp>\t<MSISDN>
const samplePlainText = '1607713294\t5511987651234'
// Sample encrypted text to be decrypted (base 64 encoded)
const sampleCipherText = '4GUXQLpRYEa2eacfuCqzuYbrCFWFNqUjNpjFrJ21WoFE'

if(samplePlainText !== null)
{
  console.log(`Encrypting plain text: \'${samplePlainText}\'`)

  // Encrypt the provided plain text
  const buffer = aes.encrypt(samplePlainText, key, iv, 'base64')
  
  // Then, encode it as base58 to make it human and URL friendly
  const cipherText = bs58.encode(buffer)

  console.log(`  >> Cipher text: \'${cipherText}\'`)
}

if(sampleCipherText !== null)
{
  console.log(`Decrypting cipher text: \'${sampleCipherText}\'`)

  // Decode the provided cipher text from base58
  const data = bs58.decode(sampleCipherText)

  // Then, decrypt it
  const plainText = aes.decrypt(data, key, iv)

  console.log(`  >> Plain text: \'${plainText}\'`)
}
