
function encrypt(data) {
  return `encripted ${data} don!!!`
}

function send(url, data) {
  const encryptData = encrypt(data)
  console.log(`sendind ${data} To ${url}`);
}

module.exports = { send, encrypt }