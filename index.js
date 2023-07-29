#!/usr/bin/env node
const fs = require('node:fs');
const colors = require('colors');
const { DEFAULT_EXPORTFILE_NAME } = require('./constants');
const Spinner = require('cli-spinner').Spinner;
const readAllDirectory = require('./utils/readAllDirectory');
const getExcludingFiles = require('./utils/getExcludingFiles');

var spinner = new Spinner('processing.. %s');
spinner.setSpinnerString(18);
spinner.setSpinnerDelay(50);
spinner.setSpinnerTitle('Reading your directory ...\n');
spinner.start();

//Business Logic
const files = [];
const filesToBeExcluded = getExcludingFiles();
readAllDirectory(__dirname, files, filesToBeExcluded);
fs.writeFileSync(
  'extractedFilesAndFolder.json',
  JSON.stringify({
    files: files,
    name: 'generatedFrom_VSCode_file&foder_tojson',
  })
);

spinner.stop();
console.log(
  colors.green(`\nSuccessfully exported to ${DEFAULT_EXPORTFILE_NAME}\n`)
);
console.log(
  colors.white.bold(
    `head over to ${colors.green(
      `https://vscode-files-andfolder-to-web.vercel.app/`
    )} and upload ${DEFAULT_EXPORTFILE_NAME} to visualize\n`
  )
);
