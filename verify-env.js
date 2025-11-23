const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env.local');
try {
  const content = fs.readFileSync(envPath, 'utf8');
  console.log('File found and readable.');
  console.log('Content length:', content.length);
  console.log('First line:', content.split('\n')[0]);
} catch (err) {
  console.error('Error reading file:', err);
}
