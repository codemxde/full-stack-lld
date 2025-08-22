const fs = require('fs');
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Error reading the file!\n' + err);
  } else {
    console.log(data);
  }
});

// const writeData = 'Time to create rather than read!';
// fs.writeFile('./write.txt', writeData, 'utf-8', (err) => {
//   if (err) {
//     console.log('Sorry, failed to write new file');
//     return;
//   }

//   console.log('File has been written succesfully');
// });

fs.rename('./write.txt', 'rewrite.txt', (err) => {
  if (err) {
    console.log('Unable to rename file!');
    return;
  }
  console.log('File rename successful');
});

const path = require('path');
const completePath = path.join('root', 'folder', 'subfolder', 'file.txt');
console.log('Complete Path: ' + completePath);

const fileName = path.basename(completePath);
console.log('File Anme: ' + fileName);

const extensionName = path.extname(completePath);
console.log('File Extension: ', extensionName);

const pathInfo = path.parse(completePath);
console.log('Path Info: ', pathInfo);

const normalizedPath = path.normalize('/path/./to/../to/../../file.txt');
console.log('Normalized Path: ', normalizedPath);

// * Copy file from One Folder to Another
const sourceFilePath = './dir/file.txt';
const destinationFilePath = './destinationFile.txt';

const readStream = fs.createReadStream(sourceFilePath);
const writeStream = fs.createWriteStream(destinationFilePath);

// connect the two streans using a pipe
readStream.pipe(writeStream);

// attach events
readStream.on('error', (err) => {
  console.log('Unable to read file:', err);
});

writeStream.on('error', (err) => {
  console.log('Unable to write file:', err);
});

writeStream.on('finish', () => {
  console.log('File copied successfully');
});
