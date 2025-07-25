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
