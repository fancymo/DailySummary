global.rootRequire = function(name) {
  return require(__dirname + '/' + name);
}

const config = rootRequire('config/index.js');
