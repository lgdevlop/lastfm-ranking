const express = require('express') // eslint-disable-line

const server = express()
const publishing = express.static('./dist')

server.use(publishing)

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080...') // eslint-disable-line no-console
})
