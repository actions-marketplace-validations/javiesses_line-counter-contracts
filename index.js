const fs = require('fs');
const path = require('path');

const contractsDir = './contracts';

fs.readdir(contractsDir, (err, files) => {
  if (err) throw err;

  let results = {};

  files.forEach(file => {
    const filePath = path.join(contractsDir, file);

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lineCount = fileContent.split('\n').length;

    results[file] = lineCount;
  });

  console.log('Line counts:', results);

  // Set output for other GitHub Actions steps
  console.log(`::set-output name=lineCounts::${JSON.stringify(results)}`);
});
