#!/usr/bin/env node
import readAllDirectory from './utils/readAllDirectory.js';
import getExcludingFiles from './utils/getExcludingFiles.js';
import colors from 'colors';
import { BACKEND_URL } from './constants.js';

//Business Logic
const files = [];
const filesToBeExcluded = getExcludingFiles();

readAllDirectory(process.cwd(), files, filesToBeExcluded);

const fetchFullFillCallback = content => {
  if (content.status === 'failed') {
    throw new Error(content.message);
  }

  console.log(
    colors.green(
      '\nsuccessfully read all files and folder - click on the link below to see your project structure\n'
    )
  );
  console.log(colors.blue.underline.bold(`${BACKEND_URL}${content.url}\n`));
};
const fetchErrCallback = err => {
  if (err.message === 'fetch failed') {
    console.log(
      colors.red.bold('\n Looks like you are not connected to internet !!!!\n')
    );
  }

  console.log(colors.red.bold('\n' + err.message + '!!!\n'));
};

fetch(BACKEND_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(files),
})
  .then(objRes => {
    return objRes.json();
  })
  .then(fetchFullFillCallback)
  .catch(fetchErrCallback);
