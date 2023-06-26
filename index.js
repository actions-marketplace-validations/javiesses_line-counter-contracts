// main.js
const fs = require('fs');
const path = require('path');

const contractsDir = './contracts';

fs.readdir(contractsDir, (err, files) => {
  if (err) throw err;

  let results = [];
  let html = `
    <style>
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 8px;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
      }
    </style>
    <table>
      <tr>
        <th>Contract Name</th>
        <th>Number of Lines</th>
      </tr>
  `;

  files.forEach(file => {
    const filePath = path.join(contractsDir, file);

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lineCount = fileContent.split('\n').length;

    results.push({[file]: lineCount});

    html += `<tr><td>${file}</td><td>${lineCount}</td></tr>`;
  });

  html += '</table>';

  console.log('Line counts:', results);
  console.log('HTML:', html);

  // Set outputs for other GitHub Actions steps
  console.log(`::set-output name=lineCounts::${JSON.stringify(results)}`);
  console.log(`::set-output name=html::${html}`);
});
