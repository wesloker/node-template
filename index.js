const server = require('./src/server');

(async function init() {
  try {
    await server();
  } catch (err) {
    console.error(err);
  }
}());
