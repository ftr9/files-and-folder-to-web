import fs from 'node:fs';
import colors from 'colors';

const readAllDirectory = (path, fileArr, filesToBeExcluded = []) => {
  const folder = fs.readdirSync(path);

  for (let i = 0; i < folder.length; i++) {
    if (fs.statSync(path + '\\' + folder[i]).isDirectory()) {
      console.log(
        `${colors.green('Reading')} 📁 ${colors.bold.red('-->')} ${folder[i]}`
      );
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
      console.log(
        `${colors.green('Reading')} 📄 ${colors.bold.red('-->')} ${folder[i]}`
      );
      fileArr.push({
        name: folder[i],
      });
    }
  }
};

export default readAllDirectory;
