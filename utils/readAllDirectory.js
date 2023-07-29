const fs = require('node:fs');
const { DEFAULT_EXPORTFILE_NAME } = require('../constants');

const readAllDirectory = (path, fileArr, filesToBeExcluded = []) => {
  const folder = fs.readdirSync(path);

  for (let i = 0; i < folder.length; i++) {
    if (fs.statSync(path + '\\' + folder[i]).isDirectory()) {
      fileArr.push({
        name: folder[i],
        children: [],
      });
      //not including the contents of excluded files
      if (!filesToBeExcluded.includes(folder[i])) {
        readAllDirectory(
          `${path + '\\' + folder[i]}`,
          fileArr[fileArr.length - 1].children
        );
      }
    } else {
      //do not include json file of extractedFilesAndFolder
      if (folder[i] === DEFAULT_EXPORTFILE_NAME) {
        continue;
      }
      fileArr.push({
        name: folder[i],
      });
    }
  }
};

module.exports = readAllDirectory;
