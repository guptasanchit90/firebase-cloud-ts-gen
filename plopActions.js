const plopActions = {
    firebaseCloudTs: [
      {
        type: 'addMany',
        destination: '{{dir dirPath}}/',
        base: './templates/',
        templateFiles: './templates/**'
      }
    ]
  }
  
module.exports = {
    plopActions: plopActions
};
