const util = require('minecraft-server-util');

const data = util.status('jogar.voltzmc.com.br').then(e => {
  console.log(e.data);
  return e.data;
});

module.exports = data;