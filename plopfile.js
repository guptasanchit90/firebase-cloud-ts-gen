const get = require('lodash.get');
const pkg = require('./package.json');
const finder = require('find-package-json');
const pjson = finder().next().value;
const nodePath = require('path');
const pkgDir = require('pkg-dir');

var plopActions = require('./plopActions').plopActions;
  
function firebaseCloudFunctionTsExpress(plop) {
    plop.setGenerator(
      'Generate complete module', 
      Object.assign({},
        { 
          description: 'Generate Firebase cloud function code with express and typescript',
          prompts: [
            {
              type: 'input',
              name: 'dirPath',
              message: 'Directory Path (./) : '
            }]
        },
        {
          description: 'Firebase cloud functions, Typescript, ExpressJS',
          actions: [].concat(plopActions.firebaseCloudTs)
        })
  );
}


module.exports = function (plop) {

  plop.addHelper('dir', (path) => {
   if(path) {
     return nodePath.resolve(process.cwd(), path);
   }
    return nodePath.resolve(process.cwd(), '.');
  });

  firebaseCloudFunctionTsExpress(plop);

};