import Yargs from 'yargs';

const getExcludingFiles = () => {
  const yargs = Yargs(process.argv);

  let excludingFiles = ['.git', 'node_modules'];
  if (
    yargs.argv.excludeContentOf &&
    typeof yargs.argv.excludeContentOf === 'string'
  ) {
    excludingFiles.push(yargs.argv.excludeContentOf);

    //if there is more arguments in --exclude get it from _ property
    //as [--excludeContentOf anyfile] has only one value so to get more values go to _ property

    if (yargs.argv._.length > 2) {
      excludingFiles = [
        ...excludingFiles,
        ...yargs.argv._.slice(2, yargs.argv._.length),
      ];
    }
    return excludingFiles;
  }

  return excludingFiles;
};

export default getExcludingFiles;
