const argv = require('yargs').argv;

const generatePage = require('./template/page/generate');
const generateComponent = require('./template/component/generate');

module.exports = function (plop) {
  if (argv['generate-component']) {
    generateComponent.setGenerator(plop);
  } else if (argv['generate-page']) {
    generatePage.setGenerator(plop);
  }
};
