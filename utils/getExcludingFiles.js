const yargs = require('yargs');

const getExcludingFiles = () => {
  let excludingFiles = [];
  if (
    yargs.argv.excludeContentOf &&
    typeof yargs.argv.excludeContentOf === 'string'
  ) {
    excludingFiles.push(yargs.argv.excludeContentOf);

    //if there is more arguments in --exclude get it from _ property
    //as [--excludeContentOf anyfile] has only one value so to get more values go to _ property

    if (yargs.argv._.length !== 0) {
      excludingFiles = [...excludingFiles, ...yargs.argv._];
    }
    return excludingFiles;
  }

  return [];
};

module.exports = getExcludingFiles;
