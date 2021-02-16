const bs58 = require('bs58')
const aes = require('./aes_encryption_helper')
const crypto = require('crypto');

const randomIV = bs58.encode(crypto.randomBytes(16))
console.log(`An example of a randomically generated IV is "${randomIV}"`);

// -- CHANGE THESE VALUES TO DO YOUR OWN TESTING --

// -- ⚠ THIS KEY IS PUBLIC AND FOR DEMONSTRATION PURPOSES ONLY. DO NOT USE IT IN PRODUCTION ⚠ --

// Sample 32-bit key (base 64 encoded)
const key = 'DY7durYvbzBsp6pUReI/SJK+HMyf6ZcgelaBjDa3Ww8='

// Sample 16-bit initialization vector (base 58 encoded) 
const iv = 'FvnmDu4pA8KZQnbXNGr2eJ'

// Sample plain text to be encrypted, formatted as: <Unix Timestamp>\t<MSISDN>\t<CPF>
const data = '1609256168\t5511984651020\t29358230010'

// Sample encrypted token to be decrypted (base 58 encoded)
const token = 'FvnmDu4pA8KZQnbXNGr2eJ.MExztQPgnq1DwYr69dCKK3bE4NLz4uXJUvLP1T643cFKXgQU7mTwSGYfdYAESv3F7'

if(data !== null)
{
  console.log();
  console.log(`-- Encoding token -------------------------------------------`)
  console.log(`>> Data: \'${data}\'`)
  console.log(`>> Key: \'${key}\'`)
  console.log(`>> IV: \'${iv}\'`)

  const result = encodeToken(data, key, iv)

  console.log()
  console.log(`<< Token: \'${iv}.${result}\'`)
}

if(token !== null)
{
  console.log()
  console.log(`-- Decoding token -------------------------------------------`)
  console.log(`>> Token: \'${token}\'`)
  console.log(`>> Key: \'${key}\'`)

  const result = decodeToken(token, key)

  console.log()
  console.log(`<< Data: \'${result}\'`)
}

function encodeToken(data, key, iv) {
  const decodedKey = Buffer.from(key, 'base64') 
  const decodedIV = bs58.decode(iv)

  // Encrypt the provided plain text
  const buffer = aes.encrypt(data, decodedKey, decodedIV)
  
  // Then, encode it as base58 to make it human and URL friendly
  return bs58.encode(buffer)
}

function decodeToken(token, key) {
  const [iv, data] = token.split('.');
  
  const decodedKey = Buffer.from(key, 'base64') 
  const decodedIV = bs58.decode(iv) 

  return aes.decrypt( bs58.decode(data), decodedKey, decodedIV)
}